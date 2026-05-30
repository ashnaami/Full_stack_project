from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import TB_Products, TB_User
from .serializers import ProductSerializer, RegisterSerializer
from rest_framework import status

@api_view(['POST'])  #decorator @api_view
def add_products(request):
    serializer = ProductSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        # return Response(serializer.data)
        return Response({'message':'success'},status=status.HTTP_201_CREATED)
    return Response(serializer.errors)


@api_view(['GET'])
def product_list(request):
    products= TB_Products.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def product_details(request,id):
    products=TB_Products.objects.get(id=id)
    serializer = ProductSerializer(products)
    return Response(serializer.data)

@api_view(['DELETE'])
def delete_products(request,id):
    products=TB_Products.objects.get(id=id)
    products.delete()
    return Response({'message':'deleted'},status=status.HTTP_204_NO_CONTENT)

@api_view(['PUT'])
def product_update(request,id):
    products=TB_Products.objects.get(id=id)
    serializer=ProductSerializer(products,data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'message' : 'data updated'},status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PATCH'])
def product_partial_update(request,id):
    products= TB_Products.objects.get(id=id)
    serializer=ProductSerializer(products,data=request.data,partial= True)
    if serializer.is_valid():
        serializer.save()
        return Response({'message' : 'partialy updated'},status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def register(request):
    serializer=RegisterSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'message':'Registration success'},status=status.HTTP_201_CREATED)
    return Response(serializer.errors)

@api_view(['GET'])
def view_users(request):
    user= TB_User.objects.all()
    serializer = RegisterSerializer(user, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def login(request):
    email=request.data.get('email')
    print(email)
    password=request.data.get('password')
    user= TB_User.objects.filter(email=email,password=password)
    if user:
        for x in user:
            request.session["id"]=x.id
            return Response({"message": "login sucessfull"}, status=status.HTTP_404_NOT_FOUND)
    else:
        return Response({"message": "Invalid"}, status=status.HTTP_400_BAD_REQUEST)


