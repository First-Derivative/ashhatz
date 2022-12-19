from django.db import models
from .validators import ProjectTag_css_theme_validator

class Project(models.Model):

  class Meta:
    ordering = ("-created",)

  id = models.BigAutoField(primary_key=True)
  name = models.CharField(max_length=50, default="New Project")
  summary = models.CharField(max_length=500, null=True, default="summary")

  # Relationships
  tags = models.ManyToManyField("ProjectTag")
  link = models.CharField(max_length=50, default="https://www.ashhatz.com")
  # media = models.ManyToManyField("ProjectMedia")

  # Instance metadata
  created = models.DateTimeField(auto_now_add=True)
  last_updated = models.DateTimeField(auto_now=True)

  def __str__(self):
    return self.name

class ProjectTag(models.Model):

  class Meta: 
    verbose_name = "Project Tags"
    verbose_name_plural = verbose_name
    ordering = ("id",)

  id = models.BigAutoField(primary_key=True)
  name = models.CharField(max_length=50, unique=True)
  
  css_body = models.CharField(max_length=7, default="#0a0a0a", null=False, blank=False, validators=[ProjectTag_css_theme_validator])
  css_text = models.CharField(max_length=7, default="#FFF", null=False, blank=False, validators=[ProjectTag_css_theme_validator])
  

  def __str__(self):
    return self.name


# class ProjectMedia(models.Model):
#   class Meta:
#     ordering = ("id",)

#   name = models.CharField(max_length=50, blank=True, null=True)
#   url = models.CharField(max_length=200, blank=False, null=False)

#   def __str__(self):
#     return "{}:{}".format(self.name, self.url)