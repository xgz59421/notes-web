from django.db import models

class MfUser(models.Model):
    objects = models.Manager()
    uid = models.AutoField(primary_key=True)
    uname = models.CharField(max_length=32, blank=True, null=True)
    upwd = models.CharField(max_length=32, blank=True, null=True)
    phone = models.CharField(max_length=11, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'mf_user'
