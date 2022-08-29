from django.contrib import admin
from .models import *

class ProjectAdmin(admin.ModelAdmin):
  list_display = ('id', 'name','created', 'summary')
  search_fields = ('created', )
  list_filter = ('created', 'summary' )

class ProjectTagAdmin(admin.ModelAdmin):
  list_display = ('id', 'name')
  search_fields = ('name', )

class ProjectLinkAdmin(admin.ModelAdmin):
  list_display = ('id', 'name', 'url')
  search_fields = ('name', 'url')

admin.site.register(Project, ProjectAdmin)
admin.site.register(ProjectTag, ProjectTagAdmin)
admin.site.register(ProjectLink, ProjectLinkAdmin)