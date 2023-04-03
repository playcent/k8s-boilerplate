from django.urls import path

from . import views

urlpatterns = [
    path("readiness", views.index, name="index"),
    path("liveness", views.index, name="index"),
]
