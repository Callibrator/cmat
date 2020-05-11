share_uri = {}

//init buttons function
share_uri.init = function(){
    $(".share-url-label > input[type='button']").click(function(){
        $(".share-url-label > input[type='text']").select()
        document.execCommand("copy");
    })
}

//it creates a string of a json object containing all options
share_uri.stringify_params = function(){
    var params = {
        "active_countries": window.active_countries,
        "active_options": country_options.active_options,

    }



    return JSON.stringify(params)
}

//it updates the field containing the share url with the current share url
share_uri.update = function(){
    var params = share_uri.stringify_params()
    var new_uri = window.location.origin+ "/" +btoa(params)
    $(".share_uri_entry").val(new_uri)
    window.history.pushState('page2', 'Title', new_uri);


}

//returns an object containing the parameters exist in the url or undefined
share_uri.get_params = function(){
    if(window.location.pathname != "/" && window.location.pathname != "")
    {
        query = window.location.pathname.replace("/","")
        params = JSON.parse(atob(query))
        return params
    }else{
        return undefined
    }

}

//load parameters to the application
share_uri.load_params = function(){
    $(".share_uri_entry").val(window.location.origin+ window.location.pathname)
    var params = share_uri.get_params()

    if(params === undefined){
        params = {}
        params.active_countries = ["USA","Spain"]
        params.active_options = {}
    }

    $("#countries-data-table > tbody > tr").each(function(i,elem){
        td0 = $(elem).find("td")[0]
        tdD = $(elem).find("td")[6]

        if(params.active_countries.indexOf($(td0).text()) != -1){
          $($(tdD).find("label > input")).click()
        }

        if($(td0).text() in params.active_options){
            var country = $(td0).text()

            if("color" in params.active_options[country])
            {

                country_options.set_ui_option(country,"color","",params.active_options[country]["color"])
            }

            if( "total_cases_linear_chart" in params.active_options[country]){
                country_options.set_ui_option(country,"number","total_cases_linear_chart",params.active_options[country]["total_cases_linear_chart"])
            }

            if( "live_cases_chart" in params.active_options[country]){
                country_options.set_ui_option(country,"number","live_cases_chart",params.active_options[country]["live_cases_chart"])
            }

            if( "daily_cases_chart" in params.active_options[country]){
                country_options.set_ui_option(country,"number","daily_cases_chart",params.active_options[country]["daily_cases_chart"])
            }

            if( "deaths_total_chart" in params.active_options[country]){
                country_options.set_ui_option(country,"number","deaths_total_chart",params.active_options[country]["deaths_total_chart"])
            }

            if( "deaths_daily_chart" in params.active_options[country]){
                country_options.set_ui_option(country,"number","deaths_daily_chart",params.active_options[country]["deaths_daily_chart"])
            }



        }

    })
}