#This is the main API File... it binds together all the functions and makes the program run!


#Importing my own directories that contain my functions.
import sys

sys.path.append("./pages")
sys.path.append("./config")
sys.path.append("./database")
sys.path.append("./api")

#Importing Modules
from flask import Flask
import config


#Pages
from index_page import index_page
from help_page import help_page

#API
from datasets_api import datasets_api


app = Flask(__name__)
app.secret_key = config.app_secret_key


#Registering Pages
app.register_blueprint(index_page)
app.register_blueprint(help_page)

#Registering API
app.register_blueprint(datasets_api)



#Running the APP
if __name__ == "__main__":
    app.run()