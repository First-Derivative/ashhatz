from django.test import TestCase
from django.contrib.auth import get_user_model


class EmployeeModelTests(TestCase):

  def test_new_superuser(self):
    db = get_user_model()

    # superuser create: Check all fields
    super_user = db.objects.create_superuser(
        'testuser@super.com','name', 'password')
    self.assertEqual(super_user.email, 'testuser@super.com')
    self.assertEqual(super_user.name, 'name')
    self.assertTrue(super_user.is_superuser)
    self.assertTrue(super_user.is_staff)
    self.assertTrue(super_user.is_active)
    self.assertEqual(str(super_user), "name, Imperator")

    # superuser create: Check is_superuser = False raises Error
    with self.assertRaises(ValueError):
      db.objects.create_superuser(
        email='testuser@super.com', name='name' , password='password', is_superuser=False)

    # superuser create: Check is_staff = False raises Error
    with self.assertRaises(ValueError):
        db.objects.create_superuser(
            email='testuser@super.com', name='name' , password='password', is_staff=False)

    # superuser create: Check email = '' raises Error
    with self.assertRaises(ValueError):
      db.objects.create_superuser(
        email='', name='name' , password='password', is_superuser=True)

    # superuser create: Check name = '' raises Error
    with self.assertRaises(ValueError):
      db.objects.create_superuser(
        email='testuser@noname.com', name='' , password='password', is_superuser=True)


  def test_new_user(self):
    db = get_user_model()

    # user create: Check all fields + default emp_id
    user = db.objects.create_user(
        'testuser@user.com', 'name', 'password')
    self.assertEqual(user.email, 'testuser@user.com')
    self.assertEqual(user.name, 'name')
    self.assertFalse(user.is_superuser)
    self.assertFalse(user.is_staff)
    self.assertTrue(user.is_active)
    self.assertTrue(str(user), "name, Citizen")

    # user create: Check email = '' raises Error
    with self.assertRaises(ValueError):
      db.objects.create_user(
        email='', name='name', password='password')

    # user create: Check name = '' raises Error
    with self.assertRaises(ValueError):
      db.objects.create_user(
        email='testingcase@user.com', name='', password='password')
