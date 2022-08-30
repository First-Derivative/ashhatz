from django.conf import settings
from django.template.loader import render_to_string
from django.core.mail import BadHeaderError, EmailMessage
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

@api_view(['POST'])
@permission_classes((AllowAny, ))
def send_email(request):
  """
    Utility request that handles POST request -> sends email via settings.py email config
  """

  # Get DATA from POST
  subject = request.POST.get('subject', '')
  content = request.POST.get('content', '')
  contact_email = request.POST.get('email', '')
  contact_number = request.POST.get('number', '')

  if( subject and content and contact_email):

    # Set Email DATA
    email_context = { "subject": subject, "content": content, "contact_email":contact_email }
    if(contact_number):
      email_context["contact_number"] = contact_number

    # Instansiate Email Obejct 
    template = render_to_string('contact/contact_email.html', email_context)
    email = EmailMessage(
      "Sales Enquiry",
      template,
      settings.EMAIL_HOST_USER,
      [settings.EMAIL_RECIPIENT],
    )

    try: 
      email.fail_silently = False
      email.send()
      return Response("Message sent", status=200)
    except Exception as e:
      print(e)
      return Response("Message failed to send", status=400)

  else:
    return Response("Missing required fields", status=400)