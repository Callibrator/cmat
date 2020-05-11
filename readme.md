# CMAT

<p align="center">
  <img src="/res/logo1.png">
</p>

CMAT - Is a Corona virus Mini Analysis Tool. It allows you to have diagrams of multiple countries on a single chart and compare them easily!

## Summary

The general idea behind this tool is that you will have the ability to compare countries similar in population or other charasteristics and calculate how effective the measures of one country is in comparison to the other

# Installation

This is a python-flask application. All the required python libraries & modules are listed in the requirments.txt file (inside app folder). A sysadmin can install those modules with the command 
` pip install -r requirments.txt `

The Application requires python3.x and is tested specifically in python3.6. Although, it should work with all version of python >= 3.0


# URL Routes

Available URL endpoints for this application. Notice that the prefix is not included here!

## Pages
| URL  | Description |
| ------------- | ------------- |
|  Regular users | |
|  / | index page  |
|  /<*query> | Index page but it will load the qeury containing the parameters of the charts & country options |


## Robot

The robot should run as a service. It receives all data from `https://www.worldometers.info/coronavirus/` . Thank you very much for you great work!

# Configuration
This section will guide you through the configuration process of your application!
	
## Application Configuration

The administrator can change the configuration of the app by changing the values of variables inside the config/config.py file!

List of variables and what they do

| Variable  | Purpose |
| ------------- | ------------- |
| app_secret_key  | The secret key that is used by flask! |
| templatesFolder  | The templates folder. All html files are located here |
| app_uri |  Prefix for the url of the app. |
| database_host   |  The host of the mongodb database |
| database_port   |  The port of the mongodb database |
| headers | The headers the robot will use when requesting for data|
| countries_not_found_match | countries table in case the gc API have a different name than the one used in worldmeter |
| skip_countries | Robot countries & data it should skip |
| extra_set | Extra set of data (such as population) in case those data do not exist in gc API|

## Project Structure

| Folder  | Description |
| ------------- | ------------- |
| app  | The source code and required files of the project |
| res  | Resource files and folders, usually containing images,logos or other files related to this project |

### Folders inside app folder

| Folder  | Description |
| ------------- | ------------- |
| api  | Api Functions. All the functions required for the API to work |
| config  | Configuration Files, used to configure the project (password, app options etc...) |
| database  | Database files that contain the functions required to run database procedures |
| helpers | Files containig helping functions that can be used either by the API, pages or other parts of the software |
| Pages | Backend code for pages. Like index |
| Robot | Robot Crawling Functions |
| static  | Static files like images or scripts used by the web app |
| static/bootstrap  | Bootstrap Files, framework that help us create amazing user interfaces & front end pages |
| static/chartjs  | ChratJs Files, framework that help us create amazing Charts |
| static/datatables  | datatables Files, framework that help us create amazing datatables |
| static/font-awesome-4.7.0  | Font Awesome Files, framework that help us create amazing UI |
| static/css  | Custom css files created by the developer(s) for each page |
| static/jquery  | Jquery Files, library with functions for javascript to help us create complex code much quicker |
| static/js  | Custom javascript files created by the developer(s) for each page |
| static/simpleDrop  | Simple Drop. Mini drop down library for javascript, it help us create amazing dropdown menus |
| templates  | HTML code of pages |
| templates/widgets  | HTML code of widgets that can be used by multiple pages |
