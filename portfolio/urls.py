from django.urls import path
from .views import *

urlpatterns = [
  path('api/get/', GetProjects.as_view(), name="api-get-all-projects"),
  path('api/get/<slug:id>', GetProject.as_view(), name="api-get-projects"),
]
