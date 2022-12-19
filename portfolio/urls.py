from django.urls import path
from .views import *

urlpatterns = [
  # Redirect
  path('', PortfolioRedirect, name="portfolio-redirect"),

  # API 
  path('api/get/projects/', GetProjects.as_view(), name="api-get-all-projects"),
  path('api/get/project/<slug:id>', GetProject.as_view(), name="api-get-project"),
  path('api/get/tags/', GetProjectTags.as_view(), name="api-get-all-projecttags"),
  path('api/get/tag/<slug:id>', GetProjectTag.as_view(), name="api-get-projecttag"),
]
