# Generated by Django 2.2.3 on 2019-07-19 18:01

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_auto_20190719_1756'),
    ]

    operations = [
        migrations.AddField(
            model_name='question',
            name='test',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='questions', to='api.Test'),
            preserve_default=False,
        ),
    ]
