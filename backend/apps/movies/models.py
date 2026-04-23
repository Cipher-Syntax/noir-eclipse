from django.db import models #type: ignore

class Movie(models.Model):
    class StatusChoices(models.TextChoices):
        NOW_SHOWING = 'Now Showing', 'Now Showing'
        POPULAR = 'Popular Movies', 'Popular Movies'
        COMING_SOON = 'Coming Soon', 'Coming Soon'

    image = models.ImageField(upload_to='movies/', blank=True, null=True)
    title = models.CharField(max_length=999)
    genre = models.CharField(max_length=999)
    
    duration_minutes = models.PositiveIntegerField(help_text="Total runtime in minutes")
    
    synopsis = models.TextField()
    
    # REPLACED ArrayField with JSONField
    casts = models.JSONField(blank=True, default=list, help_text="Pass a JSON array of strings")
    
    rating = models.CharField(max_length=50)
    status = models.CharField(
        max_length=50, 
        choices=StatusChoices.choices, 
        default=StatusChoices.COMING_SOON
    )
    
    cinema = models.ForeignKey(
        'cinemas.Cinema', 
        on_delete=models.SET_NULL, 
        null=True,
        to_field='cinema_number',
        related_name='movies'
    )

    def __str__(self):
        return self.title