# This function will return a mongo db cursor
from pymongo import MongoClient
import config

def connect_to_db():
    db_client = MongoClient(config.database_host, config.database_port)
    return db_client