from django.urls import path #type: ignore
from .views import UserProfileView

urlpatterns = [
    path('me/', UserProfileView.as_view(), name='user-profile'),
]