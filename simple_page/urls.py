from django.urls import path
from simple_page import views

urlpatterns = [
    path('', views.home, name='simple_page'),
    path('calendar/', views.calendar, name='simple_page'),
    path('contact/', views.contact, name='simple_page'),
    path('eboard/', views.eboard, name='simple_page'),
    path('alumni-speaker-series/',views.speaker_series, name='simple_page'),
]