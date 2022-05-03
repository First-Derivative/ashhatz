from django.contrib import auth
from django.utils.decorators import method_decorator
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from django.views.decorators.csrf import ensure_csrf_cookie

@method_decorator(ensure_csrf_cookie, name='dispatch')
class GetCSRFToken(APIView):
  permission_classes = [AllowAny]

  def get(self, request, format=None):
    return Response({'success': 'CSRF Token set'})