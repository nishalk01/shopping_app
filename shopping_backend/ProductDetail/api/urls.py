from django.urls import path
from .views import api_get_all_product

app_name="products"

urlpatterns=[
    path("get_all/",api_get_all_product,name="all_product"),
]