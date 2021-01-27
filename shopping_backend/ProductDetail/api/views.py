from rest_framework.decorators import api_view

from ProductDetail.models import AvailableProductsList
from .serializers import ProductSerializers
from rest_framework.response import Response


@api_view(['GET',])
def api_get_all_product(request):
    if request.method == "GET":
        all_products=AvailableProductsList.objects.all()
        serializers=ProductSerializers(all_products,context={"request":request},many=True)
        return Response(serializers.data)
