# middleware.py

from django.http import JsonResponse
from errors.custom_error import CustomError

class ErrorHandlingMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):     
      response = self.get_response(request)
      return response
      
    def process_exception(self, request, exception):
        if isinstance(exception, CustomError):
          return JsonResponse({ 'errors': exception.serialize_errors()}, safe=False, status=exception.status_code)
        else: 
          return JsonResponse([{'message': 'something went wrong.'}], status_code=400)  

    
