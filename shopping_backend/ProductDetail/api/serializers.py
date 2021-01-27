from rest_framework import serializers
from ProductDetail.models import AvailableProductsList


class ProductSerializers(serializers.ModelSerializer):
 class Meta:
    model=AvailableProductsList
    fields=['prouct_name','product_image','product_detail','product_id','product_cost','product_rating','avaialble']

