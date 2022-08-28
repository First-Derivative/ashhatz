from django.db import models

class Project(models.Model):

  id = models.BigAutoField(primary_key=True)
  name = models.CharField(max_length=50, default="New Project")
  summary = models.CharField(max_length=500, null=True, default="summary")
  media = models.CharField(max_length=100, null=True, blank=True)

  # Relationships
  tags = models.ManyToManyField('ProjectTag')
  link = models.ForeignKey('Link', on_delete=models.CASCADE, null=True, blank=True)

  # Instance metadata
  created = models.DateTimeField(auto_now_add=True)
  last_updated = models.DateTimeField(auto_now=True)

  def __str__(self):
    return self.name

class ProjectTag(models.Model):
  id = models.BigAutoField(primary_key=True)
  name = models.CharField(max_length=50)
  media = models.CharField(max_length=100, null=True, blank=True)

  def __str__(self):
    return self.name

class Link(models.Model):
  id = models.BigAutoField(primary_key=True)
  name = models.CharField(max_length=50)
  url = models.CharField(max_length=50)
  media = models.CharField(max_length=100)

  def __str__(self):
    return "{}:{}".format(self.name, self.url)
