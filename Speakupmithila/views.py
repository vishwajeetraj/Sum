from django.shortcuts import render


def home(request):
    return render(request, 'index.html')

def about(request):
    return render(request, 'about.html')

def contact_us(request):
    return render(request, 'contact_us.html')

def artist_registration(request):
    return render(request, 'artist_registration.html')
