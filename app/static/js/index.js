//adds or removes a country to & from the charts
function manage_country(country)
{
    if (window.active_countries.indexOf(country) == -1)
    {
        color = "#"+((1<<24)*Math.random()|0).toString(16)

        cases.add_total(country,color)
        cases.add_live(country,color)
        cases.add_daily(country,color)

        deaths.add_total(country,color)
        deaths.add_daily(country,color)

        country_options.add_option(country,color)




        window.active_countries.push(country)
    }else{

        cases.remove_total(country)
        cases.remove_live(country)
        cases.remove_daily(country)

        deaths.remove_total(country)
        deaths.remove_daily(country)

        country_options.remove_option(country)
        
        window.active_countries.splice(window.active_countries.indexOf(country),1)
    }

    share_uri.update()

}



//loads data!
function load_data(){
    country_datatable.load_data_table()

}

/* INITIALIZATION PARAMETERS */

//initialize all charts
function initialize_all(){

    share_uri.init()

    country_datatable.init_table()

    cases.create_total()
    cases.create_live()
    cases.create_daily()

    deaths.create_total()
    deaths.create_daily()




}

//active countires that are displayed on the chart!
window.active_countries = []

$(document).ready(function(){

    initialize_all()




    simpleDrop.create("countries_drop_menu")

    //check if data are available and load them to the appropriate tables if they're
    window.check_interval = setInterval(function(){
        if(window.data_status == "complete"){
            clearInterval(window.check_interval)
            load_data()
            share_uri.load_params()
        }

    },100)



})