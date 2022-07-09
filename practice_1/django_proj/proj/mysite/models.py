from django.db import models

# Create your models here.


class Something(models.Model):

    id = models.AutoField(primary_key=True)
    name = models.TextField(null=True, default="default")