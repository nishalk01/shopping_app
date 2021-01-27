import os

from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
from django.core.asgi import get_asgi_application
import realtime_list.routing

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "shopping_backend.settings")

application = ProtocolTypeRouter({
  "http": get_asgi_application(),
  "websocket": AuthMiddlewareStack(
        URLRouter(
            realtime_list.routing.websocket_urlpatterns
        )
    ),
})