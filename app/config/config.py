#Application Secret Key
app_secret_key= b''


#Default Templates Folder Path
templatesFolder = "templates"


#App URL
app_uri = ""

#Robot
robot_timer = 43200 # 12 hours

# Database Configuration
database_host = "127.0.0.1"
database_port = 27017

# Request headers required by worldometer

headers = {
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
    "Accept-Encoding": "utf-8",
    "Accept-Language": "en-US,en;q=0.5",
    "Cache-Control": "no-cache",
    "Host": "www.worldometers.info",
    "Pragma": "no-cache",
    "TE": "Trailers",
    "Upgrade-Insecure-Requests": 1,
    "User-Agent": "N/A",
}

# Countries Not Found Extra Table

countries_not_found_match = {

    "USA": "United States", #Special Country, Hardcode that one
    "UK" : "United Kingdom",
    "UAE" : "United Arab Emirates",
    "S Korea" : "South Korea",
    "DRC" : "Democratic Republic of the Congo",
    "Réunion" : "Reunion",
    "Palestine" : "Palestinian Territory",
    "Congo" : "Democratic Republic of the Congo",
    "CAR" : "Central African Republic",
    "Curaçao" : "Curacao",
    "St Vincent Grenadines" : "Saint Vincent and the Grenadines",
    "Vatican City" : "Vatican",
    "St Barth" : "Saint Barthelemy",
    "Saint Pierre Miquelon" : "Saint Pierre and Miquelon",
}

skip_countries = [
    "Diamond Princess",
    "MS Zaandam",
]

extra_set = {
    "Channel Islands": {"population": 170499},
    "Faeroe Islands": {"population": 52337},
    "Brunei": {"population": 442400},
    "Timor-Leste": {"population": 1183643},
    "Turks and Caicos": {"population": 31458},
    "Caribbean Netherlands": {"population": 25987},


}