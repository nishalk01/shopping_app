# Generated by Django 3.1.5 on 2021-01-25 17:13

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AvailableProductsList',
            fields=[
                ('prouct_name', models.CharField(max_length=150)),
                ('product_image', models.ImageField(upload_to='')),
                ('product_detail', models.TextField()),
                ('product_id', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False)),
                ('product_cost', models.IntegerField(max_length=6)),
                ('product_rating', models.IntegerField(max_length=2)),
                ('avaialble', models.IntegerField()),
            ],
        ),
    ]
