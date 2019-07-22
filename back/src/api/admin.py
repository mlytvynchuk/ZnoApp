from django.contrib import admin
from .models import *
# Register your models here.


class TestInline(admin.TabularInline):
    model = Test


class SubjectAdmin(admin.ModelAdmin):
    model = Subject
    fields = ("name","image")
    inlines = [
        TestInline
    ]


class QuestionInline(admin.TabularInline):
    model = Question

class TestAdmin(admin.ModelAdmin):

    model = Test
    fields = ("name",)
    inlines = [
        QuestionInline
    ]


admin.site.register(Test, TestAdmin)
admin.site.register(Question)
admin.site.register(QuestionChoice)
admin.site.register(QuestionType)

admin.site.register(Subject, SubjectAdmin)
