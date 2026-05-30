from django.db import models

# Create your models here.
class TB_Products(models.Model):
    pro_name= models.CharField(max_length=50, default="")
    pro_price= models.IntegerField(max_length=25, default="")
    pro_qauntity= models.CharField(max_length=25, default="")


class TB_User(models.Model):
    name=models.CharField(max_length=50,default="")
    phone=models.CharField(max_length=10,default="")
    email=models.CharField(max_length=50,default="")
    password=models.CharField(max_length=50,default="")