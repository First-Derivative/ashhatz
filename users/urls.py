from django.urls import path
from .views import * 

urlpatterns = [
  path('getcsrf/', GetCSRFToken.as_view(), name="get-csrf"),
  path('checkAuth/', CheckAuth.as_view(), name="check-auth"),
  path('auth/login', LoginView.as_view(), name="login-auth"),
  path('auth/logout', LogoutView.as_view(), name="logout-auth")
]
