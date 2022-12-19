from django.test import TestCase
from .models import Project, ProjectTag#, ProjectMedia
from django.core.exceptions import ValidationError

class PortfolioModelTests(TestCase):
  
  def setUp(self):
    # Initialize DB objects Project, ProjectTag(s), and Link
    Project.objects.create(name="project_x", summary="1,2,3.")
    ProjectTag.objects.create(name="python")
    ProjectTag.objects.create(name="javascript")
    # ProjectMedia.objects.create(name="media_image_1", url="assets/media/hash")

  def test_portfolio_project_entity(self):
    # Get objects created in setUp()
    project = Project.objects.get(name="project_x")
    tag1 = ProjectTag.objects.get(name="python")
    tag2 = ProjectTag.objects.get(name="javascript")
    # media = ProjectMedia.objects.get(name="media_image_1")

    self.assertEqual(project.tags.all().count(), 0)
    # self.assertEqual(project.media.all().count(), 0)

    # Attach model instances to project
    project.tags.add(tag1)
    project.tags.add(tag2)
    # project.media.add(media)

    # Validate attachment tag and link count()
    self.assertEqual(project.tags.all().count(), 2)
    # self.assertEqual(project.media.all().count(), 1)

  def test_portfolio_save(self):
    project = Project.objects.get(name="project_x")
    tag1 = ProjectTag.objects.get(name="python")
    tag2 = ProjectTag.objects.get(name="javascript")
    # media = ProjectMedia.objects.get(name="media_image_1")
    tag1.save()
    tag2.save()
    # media.save()
    project.save()


    # validate correct values initialized for tags
    self.assertEqual(tag1.id, 1)
    self.assertEqual(tag1.name, "python")
    self.assertEqual(str(tag1), tag1.name) # validate str dunder override
    self.assertEqual(tag2.id, 2)
    self.assertEqual(tag2.name, "javascript")
    self.assertEqual(str(tag2), tag2.name) # validate str dunder override

    # validate correct values initialized for media
    # self.assertEqual(media.id, 1)
    # self.assertEqual(media.name, "media_image_1")
    # self.assertEqual(str(media), "{}:{}".format(media.name, media.url))

    # validate correct values initialized for project
    self.assertEqual(project.id, 1)
    self.assertEqual(project.name, "project_x")
    self.assertEqual(project.summary, "1,2,3.")
    self.assertEqual(project.link, "https://www.ashhatz.com")
    self.assertNotEqual(project.tags, None)
    # self.assertNotEqual(project.media, None)
    self.assertEqual(str(project), project.name) # validate str dunder override

  def test_portfolio_errors(self):
    ''' Testing validation methods and criteria for saving new instances'''

    # Check ProjecTag Validators 

    with self.assertRaises(ValidationError): #check css_body invalid hex code
      p = ProjectTag(name="temp-tag", css_body="#1234", css_text="#FFF")
      p.full_clean()
    
    with self.assertRaises(ValidationError): #check css_body invalid hex code
      p = ProjectTag(name="temp-tag2", css_body="#klsjdf", css_text="000")
      p.full_clean()
      
    with self.assertRaises(ValidationError): #check css_body invalid hex code
      p = ProjectTag(name="temp-tag3", css_body="#FFFFFF", css_text="FFF")
      p.full_clean()