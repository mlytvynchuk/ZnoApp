from django.db import models


class Subject(models.Model):
    name = models.CharField(max_length=100)
    # tests = models.ManyToManyField("Test", related_name="subjects")
    image = models.ImageField(upload_to="subjectimages", blank=True, null=True)
    def __str__(self):
        return self.name


class Test(models.Model):
    name = models.CharField(max_length=200)
    subject = models.ForeignKey('Subject', on_delete=models.CASCADE, related_name="tests")

    def __str__(self):
        return self.name


class QuestionType(models.Model):
    name = models.CharField(max_length=100)
    def __str__(self):
        return self.name


class QuestionChoice(models.Model):
    name = models.CharField(max_length=300)
    def __str__(self):
        return self.name


class Question(models.Model):
    index = models.FloatField()
    test = models.ForeignKey("Test", on_delete=models.CASCADE, related_name="questions")
    typeOf = models.ForeignKey("QuestionType", on_delete=models.CASCADE, verbose_name="type", default=1) 
    question = models.TextField(null=True, blank=True)
    image = models.ImageField(upload_to="uploads/", null=True, blank=True)
    answer = models.TextField()
    value = models.IntegerField(default=1)
    choices = models.ForeignKey("QuestionChoice", related_name="questions", on_delete=models.CASCADE, null=True, blank=True,default=1)
    def __str__(self):
        return str(self.index) + " " + self.test.name
