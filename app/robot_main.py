#This robot is responsible for fetching the data from worldmeter.com

import sys

sys.path.append("./pages")
sys.path.append("./config")
sys.path.append("./robot")
sys.path.append("./database")
sys.path.append("./helpers")


import geonamescache
import time
import config

# robot functions
from get_main_data import get_main_data
from get_historical_data import get_historical_data

# Database

from connect_to_db import connect_to_db
from save_countries_general import save_countries_general
from save_country_history import save_country_history
from get_db_cursor import get_db_cursor
from add_log import add_log

def main():
    print("Started!")

    gc = geonamescache.GeonamesCache()
    countries = gc.get_countries_by_names()

    main_data = get_main_data()
    country_history = {}




    for country in main_data:
        if country in config.skip_countries:
            continue

        if "link" in main_data[country]:
            country_history[country] = get_historical_data("https://www.worldometers.info/coronavirus/" + main_data[country]["link"])
        else:
            country_history[country] = {}

        if country in config.countries_not_found_match:
            new_cname = config.countries_not_found_match[country]
        else:
            new_cname = country

        if new_cname in config.extra_set:
            country_history[country]["more_info"] = config.extra_set[new_cname]
            main_data[country]["more_info"] = config.extra_set[new_cname]
        elif new_cname in countries:
            country_history[country]["more_info"] = countries[new_cname]
            main_data[country]["more_info"] = countries[new_cname]
        else:
            print("not found",country) # I should report this to a file!!!

    connector = connect_to_db()
    db = get_db_cursor(connector)
    save_countries_general(db, main_data)
    for country in country_history:
        save_country_history(db,country,country_history[country])

    add_log(db,"robot","Robot Status: Ok")

    connector.close()
    print("Done!")
    # Save Data To DB!


if __name__ == "__main__":
    while True:
        main()
        time.sleep(config.robot_timer)

    #data = get_historical_data("https://www.worldometers.info/coronavirus/country/us/")

    # gc = geonamescache.GeonamesCache()
    # countries = gc.get_countries_by_names()
    #
    # main_data = get_main_data()
    # for country in main_data:
    #     if country in config.skip_countries:
    #         continue
    #
    #
    #
    #     if country in config.countries_not_found_match:
    #         new_cname = config.countries_not_found_match[country]
    #     else:
    #         new_cname = country
    #
    #     if new_cname in config.extra_set:
    #         main_data[country]["more_info"] = config.extra_set[new_cname]
    #     elif new_cname in countries:
    #         main_data[country]["more_info"] = countries[new_cname]
    #     else:
    #         print(country) # I should report this to a file!!!
    #
    # db = connect_to_db()
    # save_countries_general(db,main_data)
    #print(data)