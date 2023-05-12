import logging
from django.shortcuts import render
from django.db import connection
from django.http import JsonResponse

logger = logging.getLogger("ashura_app")

def index(request):
  logger.info("Index view requested.")
  return JsonResponse({ "message": "OK"}, status=200)
