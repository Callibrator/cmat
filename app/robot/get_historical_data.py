# This function will retrieve all historical data of a country, the url must be provided
# it will return a json object with the data

import urllib.request
from urllib.request import urlopen
from bs4 import BeautifulSoup as Soup
import yaml

import config
from get_data_from_chart import  get_data_from_chart
from remove_bad_str_part import remove_bad_str_part

def get_historical_data(url):
    req = urllib.request.Request(url, headers=config.headers)
    d = urlopen(req)
    data = d.read().decode()

    objData = {}


    x = data.find("""<script type="text/javascript">
    Highcharts.chart('coronavirus-cases-linear'""")
    corona_virs_cases_linear = None
    if x != -1:
        x += +len("""<script type="text/javascript">
    Highcharts.chart('coronavirus-cases-linear',""")

        y = data[x:].find("})") + x

        corona_virs_cases_linear_string = data[x:y] + "}"
        corona_virs_cases_linear_string = remove_bad_str_part(corona_virs_cases_linear_string, "/*", "*/")
        corona_virs_cases_linear = yaml.load(corona_virs_cases_linear_string)

    x = data.find("Highcharts.chart('coronavirus-cases-log',")
    corona_virs_cases_log = None
    if x != -1:
        x+= len("Highcharts.chart('coronavirus-cases-log',")
        y = data[x:].find("})") + x
        corona_virs_cases_log_string =  data[x:y] + "}"
        corona_virs_cases_log_string = remove_bad_str_part(corona_virs_cases_log_string, "/*", "*/")
        corona_virs_cases_log = yaml.load(corona_virs_cases_log_string)

    x = data.find("Highcharts.chart('graph-cases-daily',")
    corona_virs_cases_daily = None
    if x != -1:
        x += len("Highcharts.chart('graph-cases-daily',")
        y = data[x:].find("})") + x
        corona_virs_cases_daily_string = data[x:y] + "}"
        corona_virs_cases_daily_string = remove_bad_str_part(corona_virs_cases_daily_string, "/*", "*/")
        corona_virs_cases_daily = yaml.load(corona_virs_cases_daily_string)

    x = data.find("Highcharts.chart('graph-active-cases-total', ")
    corona_virs_cases_total = None
    if x != -1:
        x += len("Highcharts.chart('graph-active-cases-total', ")
        y = data[x:].find("})") + x
        corona_virs_cases_total_string = data[x:y] + "}"
        corona_virs_cases_total_string = remove_bad_str_part(corona_virs_cases_total_string, "/*", "*/")
        corona_virs_cases_total = yaml.load(corona_virs_cases_total_string)

    x = data.find("Highcharts.chart('coronavirus-deaths-linear', ")
    corona_virs_deaths_linear = None
    if x != -1:
        x += len("Highcharts.chart('coronavirus-deaths-linear', ")
        y = data[x:].find("})") + x
        corona_virs_deaths_linear_string = data[x:y] + "}"
        corona_virs_deaths_linear_string = remove_bad_str_part(corona_virs_deaths_linear_string, "/*", "*/")
        corona_virs_deaths_linear = yaml.load(corona_virs_deaths_linear_string)

    x = data.find("Highcharts.chart('coronavirus-deaths-log', ")
    corona_virs_deaths_log = None
    if x != -1:
        x += len("Highcharts.chart('coronavirus-deaths-log', ")
        y = data[x:].find("})") + x
        corona_virs_deaths_log_string = data[x:y] + "}"
        corona_virs_deaths_log_string = remove_bad_str_part(corona_virs_deaths_log_string, "/*", "*/")
        corona_virs_deaths_log = yaml.load(corona_virs_deaths_log_string)

    x = data.find("Highcharts.chart('graph-deaths-daily', ")
    corona_virs_deaths_daily = None
    if x != -1:
        x += len("Highcharts.chart('graph-deaths-daily', ")
        y = data[x:].find("})") + x
        corona_virs_deaths_daily_string = data[x:y] + "}"
        corona_virs_deaths_daily_string = remove_bad_str_part(corona_virs_deaths_daily_string, "/*", "*/")
        corona_virs_deaths_daily = yaml.load(corona_virs_deaths_daily_string)



    if corona_virs_cases_linear != None:
        objData["cases_linear"] = get_data_from_chart(corona_virs_cases_linear)


    if corona_virs_cases_log != None:
        objData["cases_log"] = get_data_from_chart(corona_virs_cases_log)


    if corona_virs_cases_daily != None:
        objData["cases_daily"] = get_data_from_chart(corona_virs_cases_daily)

    if corona_virs_cases_total != None:
        objData["cases_total"] = get_data_from_chart(corona_virs_cases_total)

    if corona_virs_deaths_linear != None:
        objData["deaths_linear"] = get_data_from_chart(corona_virs_deaths_linear)

    if corona_virs_deaths_log != None:
        objData["deaths_log"] = get_data_from_chart(corona_virs_deaths_log)

    if corona_virs_deaths_daily != None:
        objData["deaths_daily"] = get_data_from_chart(corona_virs_deaths_daily)

    return objData