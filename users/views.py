from django.shortcuts import render
from django.contrib import auth
from django.utils.decorators import method_decorator
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect
from .models import User
from .serializers import UserSerializer
from utils.ErrorResponse import ErrorResponse

def handler_not_found(request, exception):
  return render(request, "404.html", {})

@method_decorator(ensure_csrf_cookie, name='dispatch')
class GetCSRFToken(APIView):
  permission_classes = [AllowAny]

  def get(self, request, format=None):
    return Response({'success': 'CSRF Token set'}, status=200)

class CheckAuth(APIView):
  permission_classes = [AllowAny]

  def get(self, request, format=None):

    try: 
      user = request.user
      if(user.is_authenticated):
        serialized = UserSerializer(user)
        return Response(serialized.data, status=200)
      else:
        error = ErrorResponse('User not Authenticated', 401)
        return Response(error.message, status=error.status)
    except User.DoesNotExist as err:
      print(err)
      error = ErrorResponse('Cannot find User', 401)
      return Response(error.message, status=error.status)

@method_decorator(csrf_protect, name='dispatch')
class LoginView(APIView):
  permission_classes = [AllowAny]

  def post(self, request, format=None):
    data = self.request.data
    email = data['email']
    password = data['password']

    try:
      user = auth.authenticate(email=email, password=password)

      if user is not None:
        auth.login(request, user)
        serialized = UserSerializer(user)
        return Response(serialized.data, status=200)
      else:
        error = ErrorResponse('Incorrect Credentials', 401)
        return Response(error.message,  status=error.status)
    except:
      error = ErrorResponse('Server authentication error', 400)
      return Response(error.message, status=error.status)

class LogoutView(APIView):
  permission_classes = [IsAuthenticated]

  def post(self, request, format=None):
    try:
      auth.logout(request)
      return Response({ 'success': 'Loggout Out' })
    except:
      return Response({ 'error': 'Something went wrong when logging out' })