from django.urls import include, path
from . import views
urlpatterns = [
    path('', views.index),
    path('enter_data/', views.enter_data),
    path('get_data/', views.get_data),
]