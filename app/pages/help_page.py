#this is the main page that will be displayed on the user.


from flask import Blueprint,render_template,current_app as app
from config import templatesFolder,app_uri
from flask_login import login_required

help_page = Blueprint('help', __name__,template_folder=templatesFolder)

@help_page.route("/help")
def index(query = None):

    return render_template("help.html",app_uri=app_uri)