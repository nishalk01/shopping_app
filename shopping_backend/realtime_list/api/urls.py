from django.urls import path
from .views import send_message

app_name="message_handler"

urlpatterns=[
    path("send_message/",send_message,name="send_mssg"),
    
]