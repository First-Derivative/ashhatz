from django.urls import path
from .views import *

urlpatterns = [
  path('api/get/projects/', GetProjects.as_view(), name="api-get-all-projects"),
  path('api/get/project/<slug:id>', GetProject.as_view(), name="api-get-project"),
]
