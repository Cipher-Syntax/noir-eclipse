from django.urls import path #type: ignore
from .views import CinemaListCreateView, CinemaDetailView

urlpatterns = [
    path('', CinemaListCreateView.as_view(), name='cinema-list'),
    path('<int:pk>/', CinemaDetailView.as_view(), name='cinema-detail'),
]