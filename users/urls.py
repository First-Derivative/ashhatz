from django.urls import path
from .views import * 

urlpatterns = [
    path('getcsrf/', GetCSRFToken.as_view(), name="get-csrf"),
    path('checkAuth/', CheckAuth.as_view(), name="check-auth") 
]
