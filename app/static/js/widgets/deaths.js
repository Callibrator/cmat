// pseudo class containing functions and data about the deaths

deaths = {}

//creating the chart that will contain the linear total deaths
deaths.create_total = function(){
    window.deaths_total = create_linear_chart("total_deaths")

}


//adds a country to the total deaths linear chart
deaths.add_total = function(country,color){

    historical_data = window.data.history[country].deaths_linear
    if(historical_data != undefined)
        add_to_linear_chart(country,color,historical_data,window.deaths_total)

}

//removes a country from total deaths linear chart
deaths.remove_total = function(country){
    remove_from_linear_chart(country,window.deaths_total)
}

//this function will change the color of a country on the total deaths chart
deaths.set_total_color = function(country,color){
    change_dataset_color(country,color,window.deaths_total)
}

//this function shift's the line of the specified country by the number of points described
deaths.shift_total = function(country,value){
        historical_data = window.data.history[country].deaths_linear
        if(historical_data != undefined)
            shift_chart_line(country,value,historical_data,window.deaths_total)
}

//create daily deaths bar chart
deaths.create_daily = function(){
    window.deaths_daily = create_bar_chart("daily_deaths")

}


//adds a country to the daily deaths linear chart
deaths.add_daily = function(country,color){
    historical_data = window.data.history[country].deaths_daily
    if(historical_data != undefined)
        add_to_linear_chart(country,color,historical_data,window.deaths_daily)

}

//removes a country from daily deaths linear chart
deaths.remove_daily = function(country){
    remove_from_linear_chart(country,window.deaths_daily)
}

//this function will change the color of a country on the daily deaths chart
deaths.set_daily_color = function(country,color){
    change_dataset_color(country,color,window.deaths_daily)
}


//this function shift's the line of the specified country by the number of points described
deaths.shift_daily = function(country,value){
        historical_data = window.data.history[country].deaths_daily
        if(historical_data != undefined)
            shift_chart_line(country,value,historical_data,window.deaths_daily)
}
