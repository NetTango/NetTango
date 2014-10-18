NetTango
========

Version
-------
0.1

Getting Started
---------------
This was supposed to be much more elaborate. For now, get started by playing
around with the sample model in the example directory. This shows how to rig
up a basic model with blocks.

If you create a separate repository for your directory, start by copying the
example files into a 'web' or 'www' directory. Then update the pubspec.yaml
file so that it points to the github repository for NetTango (just uncomment
the lines under dependencies, NetTango).

Troubleshooting
---------------

403 Error accessing packages directory. I was getting an error that access to ntango.dart
was forbidden. This turned out to be an Apache configuraiton problem. I had to edit the
file /etc/apace2/users/msh801.conf and add the FollowSymLinks option my Directory spec:

<Directory "/Users/msh801/github/">
    Options +Indexes MultiViews FollowSymLinks
    AllowOverride All
    Order allow,deny
    Allow from all
</Directory>

