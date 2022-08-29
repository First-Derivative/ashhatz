from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from .models import * 
from .serializers import *
from utils.ErrorResponse import ErrorResponse

# Custom API to handle GET request
class GetProject(APIView):

  permission_classes = [AllowAny]

  def get(self, request, id, format=None):
    try:
      project = Project.objects.get(id=id)
      serialized = ProjectSerializer(project, many=False)
      return Response(serialized.data, status=200)
    except:
      error = ErrorResponse('Cant find project with id {id}'.format(id=id))
      return Response(error.message, status=error.status)

class GetProjects(ListAPIView):
  permission_classes = [AllowAny]
  queryset = Project.objects.all()
  serializer_class = ProjectSerializer

class GetProjectTag(APIView):
  pass

class GetProjectTags(ListAPIView):
  pass

class GetProjectLink(APIView):
  pass

class GetProjectLinks(ListAPIView):
  pass