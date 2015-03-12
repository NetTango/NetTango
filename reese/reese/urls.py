from django.conf.urls import patterns, include, url
from django.conf import settings
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    url(r'^$', 'reese.views.home.index', name='home'),
    # url(r'^blog/', include('blog.urls')),
    (r'^reese/$', "reese.views.home.reeselog"),
    (r'^reese/image$', "reese.views.home.reeseimagelog"),
    (r'^reese/imagework', "reese.views.home.imagework"),
    (r'^reese/recent', "reese.views.home.recent"),
    url(r'^admin/', include(admin.site.urls)),
    (r'^site_media/(?P<path>.*)$', 'django.views.static.serve',
    {'document_root': settings.MEDIA_ROOT,
    'show_indexes' : True}),
)
