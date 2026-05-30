from django.contrib import admin
from django.urls import path
from .import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('add_pro/',views.add_products),
    path('product_list/',views.product_list),
    path('product_details/<int:id>/',views.product_details),
    path('delete_products/<int:id>/',views.delete_products),
    path('product_update/<int:id>/',views.product_update),
    path('product_partial_update/<int:id>/',views.product_partial_update),
    path('register/',views.register),
    path('view_users/',views.view_users),
    path('login/',views.login),

]
