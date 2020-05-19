# This function will receive a database cursor, the name of the country and a dict object as arguments and will save everything in the history collection of the database
# In case of succesful insertion, it will return the document's id

import time

def save_country_history(db,country,data):
    data["name"] = country
    data["updated"] = time.time()

    prev = db.history.find_one({
        "name": country
    })

    if prev != None:
        data["_id"] = prev["_id"]
        db.history.update({"name":country}, data)
        rid = data["_id"]
    else:

        rid = db.history.insert_one(data).inserted_id

    return rid


