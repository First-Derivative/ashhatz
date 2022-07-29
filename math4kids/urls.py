from django.urls import path
from .views import *

urlpatterns = [
  path('test/create', createTest, name="math4kids-api-create-test"),
  path('test/finish', finishTest, name="math4kids-api-finish-test"),
]
