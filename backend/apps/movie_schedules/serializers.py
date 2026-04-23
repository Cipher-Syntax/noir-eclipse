from rest_framework import serializers
from .models import MovieSchedule

class MovieScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = MovieSchedule
        fields = '__all__'