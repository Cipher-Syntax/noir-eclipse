from rest_framework import serializers
from .models import Booking

class BookingSerializer(serializers.ModelSerializer):
    # user is set to read_only so it isn't required in the POST payload
    user = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = Booking
        fields = '__all__'