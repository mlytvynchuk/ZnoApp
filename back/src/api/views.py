from django.shortcuts import render
from rest_framework import viewsets
from .models import Subject
from .serializers import *
from rest_framework.response import Response

class SubjectView(viewsets.ModelViewSet):
    serializer_class = SubjectSerializer
    queryset = Subject.objects.all()
    

class TestView(viewsets.ModelViewSet):
    serializer_class = TestSerializer
    queryset = Test.objects.all()
    def retrieve(self, request, pk):
        queryset = Test.objects.filter(subject=pk)

        serializer = TestSerializer(queryset, many=True)
        return Response(serializer.data)


class QuestionView(viewsets.ModelViewSet):
    serializer_class = QuestionSerializer
    queryset = Question.objects.all()
    def retrieve(self,request, pk):
        queryset = Question.objects.filter(test=pk)
        serializer = QuestionSerializer(queryset, many=True)
        return Response(serializer.data)
        