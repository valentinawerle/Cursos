from django.http import HttpResponse
from django.shortcuts import render


# Create your views here.
def bienvenido(request):
    return HttpResponse('Hola mundo desde Django')

def despedirse(request):
    return HttpResponse("Despedida desde Django")


def contacto(request):
    return HttpResponse("Número de contacto: 12345678<br>Mail de contacto: valen@gmail")


