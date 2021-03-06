from django.http import HttpResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
# Create your views here.
from .models import Table1

@csrf_exempt
def index(request):

    return HttpResponse("<h1 style='color:blue'>Done</h1>")


@csrf_exempt
def enter_data(request):

    if request.method == "POST":

        inst = Table1()

        name_inp = request.POST['name_inp']

        inst.name = name_inp

        inst.save()
        
        return HttpResponse("<h1 style='color:green'>Saved Data</h1>")
    else:

        return HttpResponse("<h1 style='color:red'>Something went wrong</h1>")


@csrf_exempt
def get_data(request):

    data = Table1.objects.name
    # data.
    ans =""

    for each in Table1.objects.all():

        ans += each.name 
    
    # data = Something.objects.group_by()
    print(data)
    return HttpResponse(f"{ans}")