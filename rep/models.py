from django.db import models
from django.contrib.auth.models import AbstractUser
from PIL import Image

# Create your models here.
class User(AbstractUser):
    bio = models.CharField(max_length=550)


class Report(models.Model):

    title = models.CharField(max_length=250)
    content = models.TextField()
    picture = models.ImageField(
        upload_to='images/', blank=True)
    videofile = models.FileField(
        upload_to='videos/', null=True, verbose_name="")
    url = models.URLField(max_length=255, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    hate_crime = models.BooleanField(default=False)
    police_brutality = models.BooleanField(default=False)

    def crime_categories(self):
        categories = []
        if self.hate_crime:
            categories.append("Hate Crime")
        if self.police_brutality:
            categories.append("Police Brutality")


    def __str__(self):
        return self.title

