from django.db import models
from .validators import ProjectTag_css_theme_validator

class Project(models.Model):

  class Meta:
    ordering = ('name',)

  id = models.BigAutoField(primary_key=True)
  name = models.CharField(max_length=50, default="New Project")
  summary = models.CharField(max_length=500, null=True, default="summary")
  media = models.CharField(max_length=100, null=True, blank=True)

  # Relationships
  tags = models.ManyToManyField('ProjectTag')
  links = models.ManyToManyField('ProjectLink')

  # Instance metadata
  created = models.DateTimeField(auto_now_add=True)
  last_updated = models.DateTimeField(auto_now=True)

  def __str__(self):
    return self.name

class ProjectTag(models.Model):

  class Meta: 
    verbose_name = "Project Tags"
    verbose_name_plural = "Project Tags"
    ordering = ('name',)

  id = models.BigAutoField(primary_key=True)
  name = models.CharField(max_length=50)
  media = models.CharField(max_length=100, null=True, blank=True)
  
  css_body = models.CharField(max_length=7, default="#000", null=False, blank=False, validators=[ProjectTag_css_theme_validator])
  css_text = models.CharField(max_length=7, default="#FFF", null=False, blank=False, validators=[ProjectTag_css_theme_validator])
  

  def __str__(self):
    return self.name

class ProjectLink(models.Model):
  ordering = ('id')
  
  class Meta: 
    verbose_name = "Project Link"
    verbose_name_plural = "Project Links"

  id = models.BigAutoField(primary_key=True)
  name = models.CharField(max_length=50)
  url = models.CharField(max_length=50)
  media = models.CharField(max_length=100, blank=True)

  def __str__(self):
    return "{}:{}".format(self.name, self.url)
