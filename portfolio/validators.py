import re
from django.core.exceptions import ValidationError

def ProjectTag_css_theme_validator(value):
  pattern = r"^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
  if(not re.match(pattern, value)):
    raise ValidationError(
      ("%(value)s is not a valid hexcode"),
      params={'value': value})
