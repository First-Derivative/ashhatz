from django.test import TestCase
from .models import Project, ProjectTag, ProjectLink

class PortfolioModelTests(TestCase):
  
  def setUp(self):
    # Initialize DB objects Project, ProjectTag(s), and Link
    Project.objects.create(name="project_x", summary="1,2,3.", media="None")
    ProjectTag.objects.create(name="python")
    ProjectTag.objects.create(name="javascript")
    ProjectLink.objects.create(name="app", url="www.project_x.com")

  def test_portfolio_project_entity(self):
    # Get objects created in setUp()
    project = Project.objects.get(name="project_x")
    tag1 = ProjectTag.objects.get(name="python")
    tag2 = ProjectTag.objects.get(name="javascript")
    link = ProjectLink.objects.get(name="app")

    # Attach model instances to project
    project.tags.add(tag1)
    project.tags.add(tag2)
    project.link = link

    # Validate attatchemnt tag and link count()
    self.assertEqual(project.tags.all().count(), 2)
    self.assertEqual(project.link, link)

  def test_portfolio_save(self):
    project = Project.objects.get(name="project_x")
    tag1 = ProjectTag.objects.get(name="python")
    tag2 = ProjectTag.objects.get(name="javascript")
    link = ProjectLink.objects.get(name="app")
    link.save()
    tag1.save()
    tag2.save()
    project.save()

    # validate correct values initialized for link
    self.assertEqual(link.id, 1)
    self.assertEqual(link.name, "app")
    self.assertEqual(link.url, "www.project_x.com")
    self.assertEqual(str(link), "{}:{}".format(link.name, link.url)) # validate str dunder override

    # validate correct values initialized for tags
    self.assertEqual(tag1.id, 1)
    self.assertEqual(tag1.name, "python")
    self.assertEqual(tag1.media, None)
    self.assertEqual(str(tag1), tag1.name) # validate str dunder override
    self.assertEqual(tag2.id, 2)
    self.assertEqual(tag2.name, "javascript")
    self.assertEqual(tag2.media, None)
    self.assertEqual(str(tag2), tag2.name) # validate str dunder override

    # validate correct values initialized for project
    self.assertEqual(project.id, 1)
    self.assertEqual(project.name, "project_x")
    self.assertEqual(project.summary, "1,2,3.")
    self.assertEqual(project.media, "None")
    self.assertEqual(str(project), project.name) # validate str dunder override

  def test_portfolio_errors(self):
    ''' Testing validation methods and criteria for saving new instances'''
    pass