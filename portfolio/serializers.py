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

class LinkSerializer(serializers.ModelSerializer):

  class Meta:
    model = Link
    fields = '__all__'