from rest_framework import generics
from .models import Movie
from .serializers import MovieSerializer

class MovieListCreateView(generics.ListCreateAPIView):
    # Using select_related for the ForeignKey to prevent N+1 query issues
    queryset = Movie.objects.select_related('cinema').all()
    serializer_class = MovieSerializer

class MovieDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Movie.objects.select_related('cinema').all()
    serializer_class = MovieSerializer