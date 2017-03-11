# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-03-11 13:38
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('meeting', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='meeting',
            name='distance_near_univ',
        ),
        migrations.RemoveField(
            model_name='meeting',
            name='image_path',
        ),
        migrations.RemoveField(
            model_name='meeting',
            name='name',
        ),
        migrations.RemoveField(
            model_name='meeting',
            name='place',
        ),
        migrations.RemoveField(
            model_name='meeting',
            name='price_range',
        ),
        migrations.RemoveField(
            model_name='meeting',
            name='start_time',
        ),
        migrations.AlterField(
            model_name='meeting',
            name='maker',
            field=models.CharField(max_length=30),
        ),
    ]
