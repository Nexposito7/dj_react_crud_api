from django.db import models

# Create your models here.
class Task(models.Model): #construimos el modelo, dj añade el id 
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    done = models.BooleanField(default=False) #si la tarea fue hecha o no

    def __str__(self):
        return self.title #desde self quiero ver el título de cada tarea





