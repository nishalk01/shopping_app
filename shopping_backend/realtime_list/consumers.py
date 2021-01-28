import json
from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer
import pika, os



class ChatConsumer(WebsocketConsumer):
    def connect(self):
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = 'chat_%s' % self.room_name

        # Join room group
        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name,
            self.channel_name
        )

        self.accept()
        connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))
        channel = connection.channel()
        channel.queue_declare(queue='hello') # Declare a queue
        def callback(ch, method, properties, body):
             async_to_sync(self.channel_layer.group_send)(
              self.room_group_name,
             { 
                 'type': 'chat_message',
                 'message': str(body)
             }
           )
        channel.basic_consume('hello',
                      callback,
                      auto_ack=True)

        print(' [*] Waiting for messages:')
        channel.start_consuming()
        connection.close()#TODO add inside disconnect method


    def disconnect(self, close_code):
        # Leave room group
        async_to_sync(self.channel_layer.group_discard)(
            self.room_group_name,
            self.channel_name
        )

    # Receive message from WebSocket
    def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json['message']

        # Send message to room group
        async_to_sync(self.channel_layer.group_send)(
            self.room_group_name,
            {
                'type': 'chat_message',
                'message': message
            }
        )
        # connection = pika.BlockingConnection(params)
        # channel = connection.channel() # start a channel
        # channel.queue_declare(queue='hello') # Declare a queue
        # def callback(ch, method, properties, body):
        #      print(" [x] Received " + str(body))
        # channel.basic_consume('hello',
        #               callback,
        #               auto_ack=True)

        # print(' [*] Waiting for messages:')
        # channel.start_consuming()
        # connection.close()#TODO add inside disconnect method

    # Receive message from room group
    def chat_message(self, event):
        message = event['message']

        # Send message to WebSocket
        self.send(text_data=json.dumps({
            'message': message
        }))         
