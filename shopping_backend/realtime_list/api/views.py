from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
import pika
import os


@api_view(['POST',])
# @permission_classes([IsAuthenticated]) 
#TODO handle authenticated user for testing  use exception 
def send_message(request):
    if request.method=="POST":
        auth_token=request.META['HTTP_AUTHORIZATION']
        connection = pika.BlockingConnection(
                    pika.ConnectionParameters(host='localhost'))
        channel = connection.channel()
        channel.queue_declare(queue='hello')
        channel.basic_publish(exchange='',
                      routing_key='hello',
                      body='Hello World!')

        print(" [x] Sent 'Hello World!'")
        connection.close()
        return Response(status=status.HTTP_200_OK)
    #  except:
    #      return Response(status=status.HTTP_401_UNAUTHORIZED)

