# This function will return a json object with all datasets


from flask import Blueprint,render_template,current_app as app
from config import templatesFolder,app_uri
from flask_login import login_required
import json

datasets_api = Blueprint('datasets', __name__,template_folder=templatesFolder)



# Database
from connect_to_db import connect_to_db
from get_db_cursor import get_db_cursor
from get_datasets import get_datasets

@datasets_api.route("/datasets")
def datasets():
    connector = connect_to_db()
    db = get_db_cursor(connector)
    dsets = get_datasets(db)
    connector.close()

    return json.dumps(dsets)