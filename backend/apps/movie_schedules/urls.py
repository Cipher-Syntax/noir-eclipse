from django.urls import path #type: ignore
from .views import MovieScheduleListCreateView, MovieScheduleDetailView

urlpatterns = [
    path('', MovieScheduleListCreateView.as_view(), name='schedule-list'),
    path('<int:pk>/', MovieScheduleDetailView.as_view(), name='schedule-detail'),
]