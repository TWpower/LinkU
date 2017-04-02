# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-04-02 16:34
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('meeting', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='SubImage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('path', models.ImageField(default='meeting_default_image.jpg', upload_to='')),
                ('meeting', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='sub_images', to='meeting.Meeting')),
            ],
        ),
    ]
