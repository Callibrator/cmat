#!/usr/bin/python
import sys
import logging
import os



sys.path.append("/var/www/cmat/app/pages")
sys.path.append("/var/www/cmat/app/config")
sys.path.append("/var/www/cmat/app/database")
sys.path.append("/var/www/cmat/app/api")
sys.path.append('/var/www/cmat/app')

os.chdir("/var/www/cmat/app")


from app_main import app as application

#application.run(host="0.0.0.0", port=5000)








