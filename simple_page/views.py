from django.shortcuts import render

def home(request):
    return render(request, 'index.html', {})

def calendar(request):
    return render(request, 'calendar.html', {})

def contact(request):
    return render(request, 'contact.html', {})

def eboard(request):
    return render(request, 'eboard.html', {})

def speaker_series(request):
    return render(request, 'speaker_series.html', {})