# Generated by Django 3.2.5 on 2021-07-16 08:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('job', '0015_delete_interview'),
        ('userprofile', '0004_rename_application_interview_app'),
    ]

    operations = [
        migrations.AlterField(
            model_name='interview',
            name='app',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='interviews', to='job.application'),
        ),
    ]
