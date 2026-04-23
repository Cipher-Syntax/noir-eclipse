from django.db import models #type: ignore
from django.contrib.auth import get_user_model
from django.utils import timezone #type: ignore
from datetime import timedelta

User = get_user_model()

class OTP(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='otp_auth')
    code = models.CharField(max_length=6)
    created_at = models.DateTimeField(auto_now=True)

    def is_valid(self):
        expiration_time = self.created_at + timedelta(minutes=5)
        return timezone.now() <= expiration_time

    def __str__(self):
        return f"OTP for {self.user.email}"