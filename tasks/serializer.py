from rest_framework import serializers #este paquete nos permite seleccionar los campos
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        #model = 'task' #el nombre, para importar la clase Task com parám también
        model = Task
        #seleccionamos los campos, 1ro necesitamos la prop field que pide una tupla
        #fields = ('id', 'title', 'description', 'done' ) #la tupla nos dice qué datos queremos leer y convert a json
        fields = '__all__' #otra forma de decirle que queremos todos los campos, que los serialice todos  
#con esto ya tenemos la func que va a convertir de tipo de dato de python a json

    