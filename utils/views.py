from django.conf import settings
from django.http import HttpResponse
from django.template.loader import render_to_string
from django.core.mail import BadHeaderError, EmailMessage
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny

# Redirects /portfolio to React HashRouter appropriate URL
def ProfileRedirect(request):
  response = HttpResponse(status=302)
  response["Location"] = "/#/profile"
  return response

@api_view(['POST'])
@permission_classes((AllowAny, ))
def send_email(request):
  """
    Utility request that handles POST request -> sends email via settings.py email config
  """

  # Get DATA from POST
  data = request.data
  subject = data["subject"]
  content = data["content"]
  contact_email = data["email"]
  contact_number = data["number"]

  if( subject and content and contact_email):

    # Set Email DATA
    email_context = { "subject": subject, "content": content, "contact_email":contact_email }
    if(contact_number):
      email_context["contact_number"] = contact_number

    # Instansiate Email Obejct 
    template = render_to_string('utils/email_template.html', email_context)
    email = EmailMessage(
      "Sales Enquiry",
      template,
      settings.EMAIL_HOST_USER,
      [settings.EMAIL_HOST_USER],
    )
    
    # Send Email 
    try: 
      email.fail_silently = False
      email.send()
      return Response("Message sent", status=200)
    except BadHeaderError:
      return Response("Invalid Header FOund", status=400)

  else:
    print(subject, content, contact_email, contact_number)
    return Response("Missing required fields", status=400)