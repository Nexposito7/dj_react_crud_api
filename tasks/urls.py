#para  crear las rutas que necesita consultar el frontend
from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from tasks import views

# api versioning
router = routers.DefaultRouter() #tomará la vista y generará las urls
router.register(r'tasks', views.TaskView, 'tasks') #desde router vamos a estar registrando un nuevo rowtasks (*? 28:30)
#y le damos el nombre de 'tasks'

urlpatterns = [
    #1ro nom de la url, 2do qué ejecuta al visitar esto, 3ro 
    path("api/v1/", include(router.urls)), #le decimos q incluya todo lo generado por router y todas las urls generadas 
    path('docs/', include_docs_urls(title="Tasks API")),
]
#todo este código está generando lo que serían las rutas GET, POST, PUT, DELETE 


