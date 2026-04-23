from django.db import models #type: ignore

class Booking(models.Model):
    movie = models.ForeignKey(
        'movies.Movie', 
        on_delete=models.SET_NULL, 
        null=True, 
        related_name='bookings'
    )
    user = models.ForeignKey(
        'users.User', 
        on_delete=models.CASCADE, 
        related_name='bookings'
    )
    cinema_table = models.CharField(max_length=50)
    
    # REPLACED ArrayField with JSONField
    seats = models.JSONField(blank=True, default=list, help_text="Pass a JSON array of seat strings")
    
    price_per_ticket = models.DecimalField(max_digits=10, decimal_places=2)
    tickets = models.IntegerField()
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    
    booking_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Booking {self.id} by {self.user.email}"