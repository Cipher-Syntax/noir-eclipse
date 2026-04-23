from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.tokens import RefreshToken

from django.contrib.auth import get_user_model, authenticate
from django.core.mail import send_mail #type: ignore
from django.conf import settings
import random

from .models import OTP
from .serializers import RegisterRequestOTPSerializer, VerifyOTPSerializer, LoginSerializer

User = get_user_model()

class RegisterRequestOTPView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = RegisterRequestOTPSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            password = serializer.validated_data['password']

            # 1. Check if user already exists
            user = User.objects.filter(email=email).first()
            
            if user:
                if user.is_active:
                    return Response({"error": "User with this email already exists and is active."}, status=status.HTTP_400_BAD_REQUEST)
                else:
                    # User exists but is unverified. Update their password to the new one.
                    user.set_password(password)
                    user.save()
            else:
                # 2. Create the user as INACTIVE until they verify the OTP
                user = User.objects.create(email=email, is_active=False)
                user.set_password(password)
                user.save()

            # 3. Generate and assign OTP
            otp_code = str(random.randint(100000, 999999))
            otp_obj, _ = OTP.objects.get_or_create(user=user)
            otp_obj.code = otp_code
            otp_obj.save()

            # 4. Send the OTP
            send_mail(
                subject="Your Registration OTP",
                message=f"Your One-Time Password is {otp_code}. It is valid for 5 minutes.",
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[email],
                fail_silently=False,
            )

            return Response({"message": "OTP sent to email. Please verify to activate your account."}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class VerifyOTPView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = VerifyOTPSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            otp_code = serializer.validated_data['otp']

            try:
                user = User.objects.get(email=email)
                otp_obj = OTP.objects.get(user=user)
            except (User.DoesNotExist, OTP.DoesNotExist):
                return Response({"error": "Invalid email or OTP."}, status=status.HTTP_400_BAD_REQUEST)

            if otp_obj.code != otp_code or not otp_obj.is_valid():
                return Response({"error": "Invalid or expired OTP."}, status=status.HTTP_400_BAD_REQUEST)

            # 1. Activate the user account now that email is verified
            user.is_active = True
            user.save()

            # 2. Delete the OTP
            otp_obj.delete()

            # 3. Log them in immediately by returning JWT tokens
            refresh = RefreshToken.for_user(user)

            return Response({
                'message': 'Account activated successfully.',
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            }, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            password = serializer.validated_data['password']

            # Django's authenticate() automatically checks the hashed password
            user = authenticate(request, email=email, password=password)

            if user is not None:
                # Prevent login if they never verified their OTP during registration
                if not user.is_active:
                    return Response({"error": "Account is not activated. Please register again to get a new OTP."}, status=status.HTTP_403_FORBIDDEN)
                
                refresh = RefreshToken.for_user(user)
                return Response({
                    'refresh': str(refresh),
                    'access': str(refresh.access_token),
                }, status=status.HTTP_200_OK)
            else:
                return Response({"error": "Invalid email or password."}, status=status.HTTP_401_UNAUTHORIZED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)