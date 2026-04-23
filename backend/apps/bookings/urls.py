from django.urls import path #type: ignore
from .views import BookingListCreateView, BookingDetailView

urlpatterns = [
    path('', BookingListCreateView.as_view(), name='booking-list'),
    path('<int:pk>/', BookingDetailView.as_view(), name='booking-detail'),
]