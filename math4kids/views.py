from .source import Test, Question
from utils.ErrorResponse import ErrorResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

# Auxiliary Function that checks data from POST request
def validate_data(data):

  fields = ["range", "no_mult", "no_div", "bound_upper", "bound_lower"]

  for field in fields:
    if(field not in data.keys()):
      return ErrorResponse(message="Server Error: Missing {} field".format(field))
  return True

@api_view(['POST'])
@permission_classes([AllowAny])
def createTest(request):

  data = request.data
  valid_data = validate_data(data)

  # Validate POST Data
  if(type(valid_data) == ErrorResponse):
    return Response(valid_data.message, status=valid_data.status)

  new_test = Test(data["no_mult"], data["no_div"], data["bound_lower"], data["bound_upper"])
  data = new_test.jsonify()
  return Response({"test": data})

@api_view(['POST'])
@permission_classes([AllowAny])
def finishTest(request):
  return Response({"data":"finish Test"})