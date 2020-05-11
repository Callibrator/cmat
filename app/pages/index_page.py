#this is the main page that will be displayed on the user.


from flask import Blueprint,render_template,current_app as app
from config import templatesFolder,app_uri
from flask_login import login_required

index_page = Blueprint('index', __name__,template_folder=templatesFolder)

@index_page.route("/")
@index_page.route("/<query>")
def index(query = None):

    return render_template("index.html",app_uri=app_uri)