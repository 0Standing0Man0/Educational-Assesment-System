from django.contrib import admin
from django.urls import path,include
from myapp import views
from django.contrib.auth import views as auth_views
urlpatterns = [
    path("", views.index,name='home'),
    path("feedback", views.feedback,name='feedback'),
    path("login", views.login_view,name='login'),
    path("signup", views.signup,name='signup'),
    path("logout/", auth_views.LogoutView.as_view(),name='logout'),
    path("studentdashboard", views.studentdashboard,name='studentdashboard'),
    path("teacherdashboard", views.teacherdashboard,name='teacherdashboard'),
    path("test", views.test,name='test'),
]