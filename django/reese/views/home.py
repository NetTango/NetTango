# Django imports
from django.template import RequestContext, Context
from django.core.urlresolvers import reverse
from django.http import HttpResponse
from django.http import HttpResponseRedirect
from django.shortcuts import redirect
from django.shortcuts import render
from django.views.decorators.csrf import csrf_protect
from django.shortcuts import render_to_response
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt

#Reese app imports
from reese.models import FrogPondLog, ImageLogEntry, Team
from base64 import b64decode
from django.core.files.base import ContentFile
from django.utils import timezone
from datetime import datetime, timedelta

import json


def index(request):
    return HttpResponse(json.dumps({'REESE': 'frogpond'}), content_type="application/json")


def fpIntro(request):
    return render_to_response('intro.html')


def fpChallenge(request):
    challenge = int(request.get_full_path()[-1:]) # get the challenge number from the url path
    return render_to_response('challenge.html', { 'challenge' : challenge })


def fpLogDump(logs, limit_per_team):
    logcount = logs.count()

    html = "<!-- SHARE BOARD {} ENTRIES -->".format(logcount)
    teamCounts = { }
    for log in logs:
        if log.groupName in teamCounts:
            teamCounts[log.groupName] += 1
        else:
            teamCounts[log.groupName] = 1
        if limit_per_team > 0 and teamCounts[log.groupName] > limit_per_team: continue
        settings = json.loads(log.settings)
        html += "<div class='share'>"
        html += "<div class='team-box'>TEAM<br><span style='font-size: 60px; line-height: 60px;'>&#{}</span></div>".format(log.groupName)
        html += "<div class='stats-box'>"
        html += "ticks: {}<br>frogs: {}<br>generations: {}<br>average size: {}<br>".format(log.tickCount, log.frogCount, log.generations, log.avgSize)
        html += "fly count: {}<br>energy gain: {}".format(settings["max-flies"], settings["energy-gain"])
        html += "</div>"  # stats box
        html += '<div class="plot-box" style="background-image: url(/site_media/{});"></div>'.format(log.plot)
        html += '<div class="plot-box" style="background-image: url(/site_media/{});"></div>'.format(log.histogram)
        html += '<a href="/site_media/{}" target="_blank"><div class="program-box" style="background-image: url(/site_media/{});"></div></a>'.format(log.program, log.program)
        html += '<a href="/site_media/{}" target="_blank"><div class="world-box" style="background-image: url(/site_media/{});"></div></a>'.format(log.world, log.world)
        html += "</div>"  # share
        html += "<div class='timestamp'>{}</div>".format(log.logTime.strftime("%A, %B %d, %Y, %I:%M %p"))

    return html


def fpShare(request):
    delta = timezone.now() - timedelta(minutes = 15)    # time delta -40 minutes
    challenge = request.get_full_path()[-1:]            # get the challenge number from the url path
    logs = FrogPondLog.objects.order_by('-id')   # sort by most recent posts
    logs = logs.filter(share = True)                    # only show logs for sharing
    logs = logs.filter(challenge = "challenge{}".format(challenge)) # only take logs for the current challenge 
    logs = logs.filter(logTime__gte=delta)              # only take logs from the last 15 minutes
    return HttpResponse(fpLogDump(logs, 3))


def fpLogs(request):
    challenge = request.get_full_path()[-1:]            # get the challenge number from the url path
    logs = FrogPondLog.objects.order_by('-id')          # sort by most recent posts
    logs = logs.filter(challenge = "challenge{}".format(challenge)) # only take logs for the current challenge 
    return render_to_response('logdump.html', { 'logs' : logs, 'challenge' : challenge })


def fpGroupInit(request):
    teams = Team.objects.order_by('-groupSymbol')
    symbol = teams[0].groupSymbol + 1
    if symbol > 9839: symbol = 9812
    team = Team(groupSymbol = symbol, groupName = 'frogpond')
    team.save()
    return HttpResponse(json.dumps({'groupId' : team.id, 'groupSymbol' : symbol }), content_type="application/json")

@csrf_exempt
def reeselog(request):
    if request.method == "POST":
        try:
            #read request data as json from request body
            request_data = json.loads(request.body)

            #store the app_id and app_data payload
            app_id = request_data['app_id']
            app_data = request_data['app_data']
        except:
            app_id = "appID error"
            app_data = "appData error"
            return HttpResponse(json.dumps({'status': 'failed to saved data'}), content_type="application/json")
        print(request)
        #create a log object and save it in the database
        log_data = FrogPondLog(name=app_id, data=app_data)
        log_data.save()

        return HttpResponse(json.dumps({'status': 'data saved successfully'}), content_type="application/json")

    elif request.method == "GET":
        return HttpResponse("Hi -- End point")

    return HttpResponse("End point")


@csrf_exempt
def newreeselog(request):
    if request.method == "POST":
        try:
            request_data = request.POST

            #store the app_id  app_annotation, and app image data payload
            #app_id = request_data['app_id']
            groupID = request_data['groupId']
            groupName = request_data['groupName']
            challenge = request_data['challenge']
            frogCount = request_data['frogCount']
            tickCount = request_data['tickCount']
            generations = request_data['generations']
            avgSize = request_data['avgSize']
            settings = request_data['settings']
            plotImage = request_data['plotImage']
            histogramImage = request_data['histogramImage']
            worldImage = request_data['worldImage']
            programImage = request_data['programImage']
            queryString = request_data['queryString']
            userName = request_data['userName']
            share = request_data['share']

            rawPlot = plotImage.split(",")
            plotData = b64decode(rawPlot[1])
            #need to strip the base64 info lead-in
            plotImageArg = ContentFile(plotData, groupID + 'plot.png')

            rawHistogram = histogramImage.split(",")
            histogramData = b64decode(rawHistogram[1])
            #need to strip the base64 info lead-in
            histogramImageArg = ContentFile(histogramData, groupID + 'histo.png')

            rawWorld = worldImage.split(",")
            worldData = b64decode(rawWorld[1])
            #need to strip the base64 info lead-in
            worldImageArg = ContentFile(worldData, groupID + 'world.png')

            rawProgram = programImage.split(",")
            programData = b64decode(rawProgram[1])
            #need to strip the base64 info lead-in
            programImageData = ContentFile(programData, groupID + 'program.png')

            frogPondLogEntry = FrogPondLog(
                groupId= groupID, 
                groupName=groupName, 
                challenge=challenge,
                frogCount= int(frogCount), 
                tickCount=int(tickCount), 
                generations=int(generations),
                avgSize=float(avgSize),
                settings=settings, 
                plot=plotImageArg, 
                histogram=histogramImageArg,
                world=worldImageArg, 
                program=programImageData, 
                queryString=queryString,
                userName=userName,
                logTime=timezone.now(),
                share=(share == "true"))

            frogPondLogEntry.save()

        except:
            app_id = "appID error"
            app_data = "appData error"
            return HttpResponse(json.dumps({'status': 'I failed to process the image data'}), content_type="application/json")


        return HttpResponse(json.dumps({'status': 'success!'}), content_type="application/json")
    else:
        togo = HttpResponse()
        togo.write("<p>Should Not call this method via an HTTP GET</p>");
        return togo



@csrf_exempt
def reeseimagelog(request):
    if request.method == "POST":
        try:
            request_data = request.POST
            #store the app_id  app_annotation, and app image data payload
            #app_id = request_data['app_id']
            app_annotation = request_data['app_annotation']
            app_imagedata = request_data['app_imagedata']
            client_address = request.META['REMOTE_ADDR']
            app_sessionid = request_data['app_id']
            print(request)

        except:
            app_id = "appID error"
            app_data = "appData error"
            return HttpResponse(json.dumps({'status': 'I failed to process the image data'}),
                                content_type="application/json")

        stripped = app_imagedata.split(",")
        image_data = b64decode(stripped[1])
        #need to strip the base64 info lead-in
        fimage_data = ContentFile(image_data, app_sessionid + '.png')
        #log_data = ImageLog(name=app_id, annotation=app_annotation, imagedata=fimage_data)
        image_event = ImageLogEntry(name=client_address, annotation=app_annotation, sessionid=app_sessionid,
                                    imagedata=fimage_data)
        image_event.save()
        print("image saved to path: " + image_event.imagedata.url)

        return HttpResponse(json.dumps({'status': 'success!'}), content_type="application/json")
    elif request.method == "GET":
        #blah = ImageLog.objects.get(name="maybe2")
        # todo = blah.annotation
        togo = HttpResponse()
        togo.write("<p>you rock</p>");
        togo.write("<img src='")
        #togo.write(blah.imagedata)
        togo.write("'>")
        return togo

    return HttpResponse("End point")


@csrf_exempt
def imagework(request):
    if request.method == 'GET':
        images = ImageLogEntry.objects.all().order_by('-logTime');
        #return HttpResponse("I got to get, version 2")
        data = {
            'images': images
        }
        #return HttpResponse("I got to get, version 3");
        #print("after data")

        #uncomment next
        return render_to_response('review.html', data, RequestContext(request))
        #HttpResponse("proof of database lookup = " + blah.annotation)
    else:
        return HttpResponse("got here, POST")


@csrf_exempt
def recent(request):
    if request.method == 'GET':

        limittime = datetime.now() - timedelta(minutes=15);
        images = ImageLogEntry.objects.filter(logTime__gte=limittime).order_by('-logTime');

        data = {
            'images': images
        }

        return render_to_response('recentwork.html', data, RequestContext(request))
    else:
        return HttpResponse("request for recent data should not be a POST")
