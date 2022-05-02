from django.contrib import admin
from .models import User
from django.contrib.auth.admin import UserAdmin

class UserAdmin(UserAdmin):
  model = User
  # Displayed on List Page
  list_display = ('email','name','is_active', 'is_staff')
  search_fields = ('email','is_superuser')
  list_filter = ('email', 'is_active', 'is_staff')
  ordering = ('id',)

  # Displayed on Detail Page
  fieldsets = (
      (None, {'fields': ('email', 'name')}),
      ('Permissions', {'fields': ('is_staff', 'is_active', 'groups')}),
  )

  # Displayed on Add New Page
  add_fieldsets = (
    (None, {
      'classes': ('wide',),
      'fields': ('email', 'name', 'password1', 'password2', 'is_staff')}
    ),
  )

admin.site.register(User, UserAdmin)