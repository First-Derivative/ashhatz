from django.contrib import admin
from .models import *

class PortfolioAdmin(admin.ModelAdmin):
  list_display = ('id', 'created', 'summary')
  search_fields = ('created', )
  list_filter = ('created', 'summary' )

admin.site.register(Project, PortfolioAdmin)