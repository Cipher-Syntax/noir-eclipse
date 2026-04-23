from django.db import models #type: ignore

class MovieSchedule(models.Model):
    movie = models.ForeignKey(
        'movies.Movie', 
        on_delete=models.CASCADE, 
        related_name='schedules'
    )
    cinema = models.ForeignKey(
        'cinemas.Cinema', 
        on_delete=models.CASCADE,
        to_field='cinema_number',
        related_name='schedules'
    )
    show_time = models.TimeField()
    show_date = models.DateField()

    def __str__(self):
        return f"{self.movie.title} at {self.show_time} on {self.show_date}"