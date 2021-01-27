from django.db import models
import uuid 
# Create your models here.

class AvailableProductsList(models.Model):
    prouct_name=models.CharField(max_length=150)
    product_image=models.ImageField()
    product_detail=models.TextField()
    product_id=models.UUIDField( 
         primary_key = True, 
         default = uuid.uuid4) 
    product_cost=models.IntegerField()
    product_rating=models.IntegerField()
    avaialble=models.IntegerField()
    
    def __str__(self):
        return self.prouct_name
