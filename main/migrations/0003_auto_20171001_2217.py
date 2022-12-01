# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-10-01 22:17
from __future__ import unicode_literals

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_auto_20171001_0002'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='news',
            options={'verbose_name_plural': 'News'},
        ),
        migrations.AddField(
            model_name='event',
            name='event_time',
            field=models.TimeField(default=datetime.datetime(2017, 10, 1, 22, 17, 19, 6484, tzinfo=utc)),
            preserve_default=False,
        ),
    ]