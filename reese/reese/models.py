#Django imports
from django.conf import settings
from django.db import models

#Python imports
from datetime import datetime

class FrogPondLog(models.Model):
    groupId = models.TextField(null = True,max_length = 200,default = "")
    groupName = models.CharField(db_index = True,max_length = 200,default = "")
    frogCount = models.IntegerField(null = True)
    tickCount = models.IntegerField(null = True)
    avgSize = models.FloatField(null = True)
    settings = models.TextField(null = True)
    plot = models.FileField(upload_to = 'screencaps/plots', null = True, max_length = 2000)
    histogram = models.FileField(upload_to = 'screencaps/histograms', null = True, max_length = 2000)
    world = models.FileField(upload_to = 'screencaps/worlds', null = True, max_length = 2000)
    program = models.FileField(upload_to = 'screencaps/programs', null = True, max_length = 2000)
    queryString = models.TextField(null = True, max_length = 500)
    userName = models.TextField(null = True, max_length = 500)
    logTime = models.DateTimeField(default=datetime.now())
    def __unicode__(self):
        return str(self.name)


class ImageLogEntry(models.Model):
    name = models.CharField(db_index = True, max_length=200,default='noid')
    annotation = models.TextField(default='autotext')
    imagedata = models.FileField(upload_to='screencaps', max_length=2000)
    sessionid = models.CharField(max_length=200)
    logTime = models.DateTimeField(default=datetime.now())
    def __unicode__(self):
        return str(self.name)

