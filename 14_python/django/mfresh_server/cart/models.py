from django.db import models


class MfCart(models.Model):
    cid = models.AutoField(primary_key=True)
    userid = models.IntegerField(db_column='userId', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'mf_cart'


class MfCartDetail(models.Model):
    did = models.AutoField(primary_key=True)
    cartid = models.IntegerField(db_column='cartId', blank=True, null=True)  # Field name made lowercase.
    productid = models.IntegerField(db_column='productId', blank=True, null=True)  # Field name made lowercase.
    count = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'mf_cart_detail'


