from rest_framework import serializers
from .models import *


class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = "__all__"


class TestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Test
        fields = "__all__"


class QuestionSerializer(serializers.ModelSerializer):
    typeOf = serializers.StringRelatedField()
    choices = serializers.StringRelatedField()

    class Meta:
        model = Question
        fields = "__all__"
