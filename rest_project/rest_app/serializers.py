from rest_framework import serializers
from .models import TB_Products, TB_User

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model=TB_Products
        fields='__all__'

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model=TB_User
        fields='__all__'