from django.core.mail import send_mail
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny


# send_mail(
#     'Subject here',
#     'Here is the message.',
#     'from@example.com',
#     ['to@example.com'],
#     fail_silently=False,
# )

@api_view(['GET', 'POST'])
@permission_classes((AllowAny, ))
def send_email(request):
  """
    Utility request that handles POST request -> sends email via settings.py email config
  """
  print("got email request")

  return Response("got email request", status=200)
