from django.db import models


class MfProduct(models.Model):
    pid = models.AutoField(primary_key=True)
    title1 = models.CharField(max_length=64, blank=True, null=True)
    title2 = models.CharField(max_length=64, blank=True, null=True)
    pic = models.CharField(max_length=64, blank=True, null=True)
    type = models.IntegerField(blank=True, null=True)
    model = models.CharField(max_length=64, blank=True, null=True)
    func = models.CharField(max_length=64, blank=True, null=True)
    noise = models.CharField(max_length=64, blank=True, null=True)
    wind = models.CharField(max_length=64, blank=True, null=True)
    applyto = models.CharField(db_column='applyTo', max_length=64, blank=True, null=True)  # Field name made lowercase.
    size = models.CharField(max_length=64, blank=True, null=True)
    level = models.CharField(max_length=64, blank=True, null=True)
    price = models.FloatField(blank=True, null=True)
    detail = models.CharField(max_length=2048, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'mf_product'

