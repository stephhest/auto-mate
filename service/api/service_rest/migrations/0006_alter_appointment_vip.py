# Generated by Django 4.0.3 on 2022-12-08 05:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0005_remove_automobilevo_color_remove_automobilevo_year_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appointment',
            name='vip',
            field=models.BooleanField(default=False),
        ),
    ]