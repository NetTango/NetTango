"""
Django settings for reese project.

For more information on this file, see
https://docs.djangoproject.com/en/1.6/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.6/ref/settings/
"""

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
import os
BASE_DIR = os.path.dirname(os.path.dirname(__file__))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.6/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'fp_54$6(5+g^ovou#^r6_pmlf98sn0)f57nmsl#39!7-x(=2o9'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

TEMPLATE_DEBUG = True

LOCAL_DATABASE = True


# Hosts/domain names that are valid for this site; required if DEBUG is False
# See https://docs.djangoproject.com/en/1.5/ref/settings/#allowed-hosts
ALLOWED_HOSTS = ['*']

#Cross-site sharing related vars
XS_SHARING_ALLOWED_ORIGINS = '*'
XS_SHARING_ALLOWED_METHODS = ['POST','GET','OPTIONS']
XS_SHARING_ALLOWED_HEADERS = ['Content-Type', '*']

# Application definition
INSTALLED_APPS = (
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'south',
    'reese',
)

MIDDLEWARE_CLASSES = (
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'reese.middleware.crossdomainxhr.XsSharing',
)

ROOT_URLCONF = 'reese.urls'

WSGI_APPLICATION = 'reese.wsgi.application'


# Database
# https://docs.djangoproject.com/en/1.6/ref/settings/#databases

if not LOCAL_DATABASE:
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.mysql', # Add 'postgresql_psycopg2', 'mysql', 'sqlite3' or 'oracle'.
            'NAME': 'reese',                      # Or path to database file if using sqlite3.
            # The following settings are not used with sqlite3:
            'USER': 'root',
            'PASSWORD': 'R33535',
            'HOST': '', # Empty for localhost through domain sockets or '127.0.0.1' for localhost through TCP.
            'PORT': '', # Set to empty string for default.
            'OPTIONS': {
            "init_command": "SET foreign_key_checks = 0;",
            },
        }
    }
else:
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.mysql', # Add 'postgresql_psycopg2', 'mysql', 'sqlite3' or 'oracle'.
            'NAME': 'reese',                      # Or path to database file if using sqlite3.
            # The following settings are not used with sqlite3:
            'USER': 'root',
            'PASSWORD': '',
            'HOST': '', # Empty for localhost through domain sockets or '127.0.0.1' for localhost through TCP.
            'PORT': '', # Set to empty string for default.
            'OPTIONS': {
            "init_command": "SET foreign_key_checks = 0;",
            },
        }
    }

# Internationalization
# https://docs.djangoproject.com/en/1.6/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.6/howto/static-files/

STATIC_URL = '/static/'

PROJECT_DIR = os.path.dirname(__file__)

MEDIA_ROOT = os.path.join(PROJECT_DIR, '../reese/media/')
#MEDIA_ROOT = '/home/ec2-user/reese/reese/media/'
MEDIA_URL = '/media/'

STATICFILES_DIRS = {
    os.path.join(PROJECT_DIR, '../static/'),
}
