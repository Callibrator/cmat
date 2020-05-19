# This function will return the data table on the index page of coronavirus on the site worldmeter.com
# URL: https://www.worldometers.info/coronavirus/
# The result will be a json object

import urllib.request
from urllib.request import urlopen
from bs4 import BeautifulSoup as Soup

import config

def get_main_data():
    req = urllib.request.Request("https://www.worldometers.info/coronavirus/", headers=config.headers)
    d = urlopen(req)
    data = d.read().decode()

    objData = {}


    bData = Soup(data,"lxml")
    for row in bData.find(id="main_table_countries_today").find("tbody").findAll("tr"):


        if row.get("style") == "display: none":
            continue

        columns = row.findAll("td")

        if columns[1].text == "World":
            continue



        objData[columns[1].text.strip().replace(".","")] = {
            "total_cases": columns[2].text.replace(",",""),
            "new_cases": columns[3].text.replace(",",""),
            "total_deaths": columns[4].text.replace(",",""),
            "new_deaths": columns[5].text.replace(",",""),
            "total_recovered": columns[6].text.replace(",",""),
            "active_cases": columns[7].text.replace(",",""),
            "serious": columns[8].text.replace(",",""),
            "total_tests": columns[11].text.replace(",",""),
            "population": columns[13].text.replace(",",""),
        }



        c = columns[1].find("a")

        if c != None:
            objData[columns[1].text.strip().replace(".","")]["link"] = c.get("href")


    return objData
if __name__ == "__main__":
    get_main_data()