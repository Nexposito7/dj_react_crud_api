from rest_framework import viewsets
from .serializer import TaskSerializer
from  .models import Task #podemos también indicar qué campos van a ser consultados
# Create your views here.
class TaskView(viewsets.ModelViewSet): #esta clase puede saber qué datos serán consultados y generar todo el crud 
    #importamos el serializer creado 
    serializer_class = TaskSerializer #le deiemos que lo ejec y lo gauradamos en una clase
    queryset = Task.objects.all() #desde Task queremos traer todas las tareas 
