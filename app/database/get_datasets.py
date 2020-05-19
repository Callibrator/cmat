# This function will return a dict (json) that will contain all datasets

import json

def get_datasets(db):
    data = {}

    general = db.cgeneral.find_one({})

    if general != None:
        data["general"] = general
        data["general"]["_id"] = str(data["general"]["_id"])
    else:
        data["general"] = {}


    hs = db.history.find()

    data["history"] = {}

    for h in hs:
        temp = {}
        for k in h:
            temp[k] = h[k]
        if "name" in h:
            temp["_id"] = str(temp["_id"])
            data["history"][h["name"]] = temp


    return data
