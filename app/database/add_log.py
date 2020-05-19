# This function will receive a db cursor a string that will describe the type and a string that will be the message of the log

import time

def add_log(db,tp,msg):
    rid = db.history.insert_one({
        "type":tp,
        "message":msg,
        "created":time.time()

    }).inserted_id
    return rid