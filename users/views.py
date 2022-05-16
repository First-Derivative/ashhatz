from django.shortcuts import render
from django.contrib import auth
from django.utils.decorators import method_decorator
from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from django.views.decorators.csrf import ensure_csrf_cookie
from .models import User
from .serializers import UserSerializer
from utils.ErrorResponse import ErrorResponse

def handler_not_found(request, exception):
  return render(request, "404.html", {})

@method_decorator(ensure_csrf_cookie, name='dispatch')
class GetCSRFToken(APIView):
  permission_classes = [IsAuthenticated]

  def get(self, request, format=None):
    return Response({'success': 'CSRF Token set'})

class CheckAuth(APIView):
  permission_classes = [AllowAny]

  def get(self, request, format=None):

    try: 
      user = request.user
      print(user)
      if(user.is_authenticated):
        serialized = UserSerializer(user)
        return Response(serialized.data, status=200)
        print(user, 'is not authenticated')
      else:
        error = ErrorResponse('User not Authenticated', 401)
        return Response(error.message, status=error.status)
    except User.DoesNotExist as err:
      print(err)
      error = ErrorResponse('Cannot find User', 401)
      return Response(error.message, status=error.status)
