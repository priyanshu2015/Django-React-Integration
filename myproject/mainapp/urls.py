from django.urls import path, include
from .api import api_views
urlpatterns = [
    path('api/listbooks/', api_views.ListBooksAPI.as_view(), name='listbooks'),
    path('api/login/', api_views.LoginView.as_view(), name='login'),

    path('api/setcsrf/', api_views.setCSRFCookie.as_view(), name='setcsrf'),
]