from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from django.http import HttpResponse
from .models import * 
from .serializers import *
from utils.ErrorResponse import ErrorResponse

# Redirects /portfolio to React HashRouter appropriate URL
def PortfolioRedirect(request):
  print("got portfolio redirect")
  response = HttpResponse(status=302)
  response['Location'] = '/'
  return response

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

  permission_classes = [AllowAny]

  def get(self, request, id, format=None):
    try:
      project = ProjectTag.objects.get(id=id)
      serialized = ProjectTagSerializer(project, many=False)
      return Response(serialized.data, status=200)
    except:
      error = ErrorResponse('Cant find project tag with id {id}'.format(id=id))
      return Response(error.message, status=error.status)

class GetProjectTags(ListAPIView):
  permission_classes = [AllowAny]
  queryset = ProjectTag.objects.all()
  serializer_class = ProjectTagSerializer

class GetProjectLink(APIView):

  permission_classes = [AllowAny]

  def get(self, request, id, format=None):
    try:
      project = ProjectLink.objects.get(id=id)
      serialized = ProjectLinkSerializer(project, many=False)
      return Response(serialized.data, status=200)
    except:
      error = ErrorResponse('Cant find project link with id {id}'.format(id=id))
      return Response(error.message, status=error.status)


class GetProjectLinks(ListAPIView):
  permission_classes = [AllowAny]
  queryset = ProjectLink.objects.all()
  serializer_class = ProjectLinkSerializer