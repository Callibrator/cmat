// Functions for manupulating the graph(s) that display total & active cases charts
// The functions exist in a pseudo class

cases = {}


//creating the chart that will contain the linear total cases of the virus
cases.create_total = function(){
    window.casesTotalChart = create_linear_chart("total-cases-linear")
}


//adds a country to the linear total cases graph
cases.add_total = function(country,color){

    historical_data = window.data.history[country].cases_linear
    if(historical_data != undefined)
        add_to_linear_chart(country,color,historical_data,window.casesTotalChart)

}

//removes a country from total cases chart
cases.remove_total = function(country){
    remove_from_linear_chart(country,window.casesTotalChart)



}

//this function shift's the line of the specified country by the number of points described
cases.shift_total = function(country,value){
        historical_data = window.data.history[country].cases_linear
        if(historical_data != undefined)
            shift_chart_line(country,value,historical_data,window.casesTotalChart)
}

//this function will change the color of a country on the total cases chart
cases.set_total_color = function(country,color){
    change_dataset_color(country,color,window.casesTotalChart)
}

//Create the live cases chart
cases.create_live = function(){
    window.casesLiveChart = create_linear_chart("live_cases_chart")
}


//adds a country to the linear total cases graph
cases.add_live = function(country,color){
    historical_data = window.data.history[country].cases_total
    if(historical_data != undefined)
        add_to_linear_chart(country,color,historical_data,window.casesLiveChart)

}

//removes a country from total cases chart
cases.remove_live = function(country){
    remove_from_linear_chart(country,window.casesLiveChart)



}

//this function will change the color of a country on the live cases chart
cases.set_live_color = function(country,color){
    change_dataset_color(country,color,window.casesLiveChart)
}

//this function shift's the line of the specified country by the number of points described
cases.shift_live = function(country,value){
        historical_data = window.data.history[country].cases_total
        if(historical_data != undefined)
            shift_chart_line(country,value,historical_data,window.casesLiveChart)
}

//create daily cases chart
cases.create_daily = function(){
    window.casesDailyChart = create_bar_chart("daily_cases_chart")
}


//adds a country to the linear daily cases graph
cases.add_daily = function(country,color){

    historical_data = window.data.history[country].cases_daily
    if(historical_data != undefined)
        add_to_linear_chart(country,color,historical_data,window.casesDailyChart)

}

//removes a country from daily cases chart
cases.remove_daily = function(country){
    remove_from_linear_chart(country,window.casesDailyChart)

}

//this function will change the color of a country on the daily cases chart
cases.set_daily_color = function(country,color){
    change_dataset_color(country,color,window.casesDailyChart)
}

//this function shift's the line of the specified country by the number of points described
cases.shift_daily = function(country,value){
        historical_data = window.data.history[country].cases_daily
        if(historical_data != undefined)
            shift_chart_line(country,value,historical_data,window.casesDailyChart)
}