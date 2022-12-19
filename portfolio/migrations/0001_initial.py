# Generated by Django 4.0.4 on 2022-12-19 21:33

from django.db import migrations, models
import portfolio.validators


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ProjectTag',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50, unique=True)),
                ('css_body', models.CharField(default='#0a0a0a', max_length=7, validators=[portfolio.validators.ProjectTag_css_theme_validator])),
                ('css_text', models.CharField(default='#FFF', max_length=7, validators=[portfolio.validators.ProjectTag_css_theme_validator])),
            ],
            options={
                'verbose_name': 'Project Tags',
                'verbose_name_plural': 'Project Tags',
                'ordering': ('name',),
            },
        ),
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(default='New Project', max_length=50)),
                ('summary', models.CharField(default='summary', max_length=500, null=True)),
                ('link', models.CharField(default='https://www.ashhatz.com', max_length=50)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('last_updated', models.DateTimeField(auto_now=True)),
                ('tags', models.ManyToManyField(to='portfolio.projecttag')),
            ],
            options={
                'ordering': ('created',),
            },
        ),
    ]
