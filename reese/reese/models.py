#Django imports
from django.conf import settings
from django.db import models

#Python imports
from datetime import datetime

class FrogPondLog(models.Model):
    name = models.CharField(db_index = True,max_length = 200,default = "")
    data = models.TextField()
    logTime = models.DateTimeField(auto_now=True,default=datetime.now)
    def __unicode__(self):
        return str(self.name)


class ImageLogEntry(models.Model):
    name = models.CharField(db_index = True, max_length=200,default='noid')
    annotation = models.TextField(default='autotext')
    imagedata = models.FileField(upload_to='screencaps', max_length=2000)
    sessionid = models.CharField(max_length=200)
    logTime = models.DateTimeField(auto_now=True, default=datetime.now)
    def __unicode__(self):
        return str(self.name)

