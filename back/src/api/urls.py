from .views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('subjects', SubjectView, basename='subject')
router.register('tests', TestView, basename='test')
router.register('questions', QuestionView, basename='question')

urlpatterns = router.urls
