import logging
from django.http import JsonResponse, HttpResponseServerError

logger = logging.getLogger("ashura_app")

class HealthCheckMiddleware(object):
    def __init__(self, get_response):
        self.get_response = get_response
        # One-time configuration and initialization.

    def __call__(self, request):
        if request.method == "GET":
            if request.path == "/health/ready":
                return self.readiness(request)
            elif request.path == "/health/live":
                return self.liveness(request)
        return self.get_response(request)

    def liveness(self, request):
        """
        Returns that the server is alive.
        """
        logger.info('Checking the liveness of the application')
        return JsonResponse({"message": "Application is live."}, status=200)

    def readiness(self, request):
        # Connect to each database and do a generic standard SQL query
        # that doesn't write any data and doesn't depend on any tables
        # being present.
        logger.info('Checking the readiness of the application')
        try:
            from django.db import connections
            for name in connections:
                cursor = connections[name].cursor()
                cursor.execute("SELECT 1;")
                row = cursor.fetchone()
                if row is None:
                    return HttpResponseServerError("db: invalid response")
        except Exception as e:
            logger.error(str(e))
            return HttpResponseServerError("db: cannot connect to database.")

        return JsonResponse({"message": "Application is ready."}, status=200)
