from rest_framework import serializers
from .models import * 

class ProjectSerializer(serializers.ModelSerializer):

  class Meta:
    model = Project
    fields = '__all__'

class ProjectTagSerializer(serializers.ModelSerializer):

  class Meta:
    model = ProjectTag
    fields = '__all__'

class ProjectLinkSerializer(serializers.ModelSerializer):

  class Meta:
    model = ProjectLink
    fields = '__all__'

class ProjectMediaSerializer(serializers.ModelSerializer):
  class Meta:
    model = ProjectMedia
    fields = '__all__'