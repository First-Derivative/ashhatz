from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

class UserManager(BaseUserManager):

  # Create Super User -> Calls create_user to actually create user
  def create_superuser(self, email, name, password, **other_fields):
    other_fields.setdefault('is_staff', True)
    other_fields.setdefault('is_superuser', True)
    other_fields.setdefault('is_active', True)

    if other_fields.get('is_staff') is not True:
      raise ValueError( 'Superuser must be assigned to is_staff = True')
    if other_fields.get('is_superuser') is not True:
      raise ValueError('Superuser must be assigned to is_superuser = True')

    return self.create_user(email, name, password, **other_fields)

  # Method that creates Users
  def create_user(self, email, name, password, **other_fields):

    if not email:
      raise ValueError('You must provide an email address')
    if not name:
      raise ValueError('You must provide a name')

    other_fields.setdefault('is_active', True)

    email = self.normalize_email(email)
    user = self.model(email=email, name=name, **other_fields)
    user.set_password(password)
    user.save()
    return user

class User(AbstractBaseUser, PermissionsMixin):

  # Identification
  email = models.EmailField(max_length=254, unique=True)
  name = models.CharField(max_length=150)

  # Site Metadata Fields
  is_staff = models.BooleanField(default=False) # Gives Permission to Admin Site
  is_active = models.BooleanField(default=True) # All users are active
  last_active = models.DateTimeField(auto_now=True)
  created = models.DateTimeField(auto_now_add=True)

  objects = UserManager()
  USERNAME_FIELD = 'email'
  REQUIRED_FIELDS = ['name']

  def __str__(self):
    opt = "Imperator" if self.is_superuser else "Citizen"
    return "{name}, {opt}".format( name = self.name, opt = opt)