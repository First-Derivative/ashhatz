from .source import Test, Question
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

@api_view(['GET'])
@permission_classes([AllowAny])
def createTest(request):
  new_test = Test(5, 5, 1, 12)
  data = new_test.jsonify()
  return Response({"test": data})

@api_view(['POST'])
@permission_classes([AllowAny])
def finishTest(request):
  return Response({"data":"finish Test"})