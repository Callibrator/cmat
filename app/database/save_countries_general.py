# This function will save all general details for all countries in the database
# It takes a db cursor and the main data as arguments!


import time


def save_countries_general(db,data):


    prev = db.cgeneral.find_one({})

    if prev != None:

        db.cgeneral.update({"_id":prev["_id"]}, {"data":data,"updated":time.time(),"_id":prev["_id"]})
        rid = prev["_id"]
    else:

        rid = db.cgeneral.insert_one({"data":data,"updated":time.time()}).inserted_id

    return rid