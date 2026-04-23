from rest_framework import generics
from .models import MovieSchedule
from .serializers import MovieScheduleSerializer

class MovieScheduleListCreateView(generics.ListCreateAPIView):
    # prefetch_related/select_related used to pull in both foreign keys efficiently
    queryset = MovieSchedule.objects.select_related('movie', 'cinema').all()
    serializer_class = MovieScheduleSerializer

class MovieScheduleDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = MovieSchedule.objects.select_related('movie', 'cinema').all()
    serializer_class = MovieScheduleSerializer