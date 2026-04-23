from django.urls import path #type: ignore
from .views import RegisterRequestOTPView, VerifyOTPView, LoginView

urlpatterns = [
    # Registration Flow
    path('register/', RegisterRequestOTPView.as_view(), name='register'),
    path('verify-otp/', VerifyOTPView.as_view(), name='verify-otp'),
    
    # Standard Login Flow
    path('login/', LoginView.as_view(), name='login'),
]