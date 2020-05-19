# This function will fix/trim and normalize all required data from charts and it will return them as a json object
# Only important data will be returned

def get_data_from_chart(data):

    newData = {}

    #print(data["xAxis"]["categories"])
    #print(data["series"][0]["data"])

    newData["x"] = data["xAxis"]["categories"]
    newData["y"] = data["series"][0]["data"]

    return newData