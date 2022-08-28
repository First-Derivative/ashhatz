# Generated by Django 4.0.4 on 2022-08-28 00:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0002_project_name'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Codebase',
            new_name='ProjectTag',
        ),
        migrations.RenameField(
            model_name='project',
            old_name='codebase',
            new_name='ProjectTag',
        ),
        migrations.AlterField(
            model_name='project',
            name='name',
            field=models.CharField(default='New Project', max_length=50),
        ),
        migrations.AlterField(
            model_name='project',
            name='summary',
            field=models.CharField(default='summary', max_length=500, null=True),
        ),
    ]
