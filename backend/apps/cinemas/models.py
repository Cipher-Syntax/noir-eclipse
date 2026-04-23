from django.db import models #type: ignore

class Cinema(models.Model):
    cinema_number = models.IntegerField(unique=True)
    location = models.CharField(max_length=999)
    cinema_image = models.ImageField(upload_to='cinemas/', blank=True, null=True)

    def __str__(self):
        return f"Cinema {self.cinema_number} - {self.location}"