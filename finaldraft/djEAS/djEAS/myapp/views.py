from django.contrib.auth.decorators import login_required
from django.views.decorators.cache import cache_control
from django.contrib import messages
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model,authenticate,login,logout
from .models import *
from django.shortcuts import render,redirect
def index(request):
    return render(request,'landing.html')
# Create your views here.
def feedback(request):
    return render(request,'feedback.html')
def login_view(request):
    if request.method=='POST':
        username=request.POST['username']
        password=request.POST['password']
        user=authenticate(request,username=username,password=password)
        if user is not None:
            login(request,user)
            up=UserProfile.objects.get(user=request.user)
            if up.user_type=='Student':
                return redirect('studentdashboard')
            else:
                return redirect('teacherdashboard')  
        else:
            messages.error(request,'Invalid Command')
    return render(request,'login.html')
def signup(request):
    if request.method=='POST':
        username=request.POST['username']
        password=request.POST['password']
        name=request.POST['name']
        user_type=request.POST.get('user_type')
        user=User.objects.create_user(username=username,password=password,first_name=name)
        user.save()
        user_profile=UserProfile(user=user,user_type=user_type)
        user_profile.save()
        return redirect('login')
    return render(request,'signup.html')
@login_required
@cache_control(no_cache=True, must_revalidate=True, no_store=True)
def studentdashboard(request):
    return render(request,'studentdashboard.html')
@login_required
@cache_control(no_cache=True, must_revalidate=True, no_store=True)
def teacherdashboard(request):
    return render(request,'teacherdashboard.html')
@login_required
def test(request):
    return render(request,'test.html')