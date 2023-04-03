from django.urls import path

from . import views

urlpatterns = [
    path("ready", views.index, name="index"),
    path("live", views.index, name="index"),
]
