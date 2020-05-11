// Pseudo Class containing country options,settings and function that allow users to manipulate the countries in each graph!

country_options = {}
country_options.active_options = {}
//set the new options to charts
country_options.set_new_options = function(cid,type,cref,value){
    if(!(cid in country_options.active_options)){
        country_options.active_options[cid] = {}
    }
    if(type == "color"){

        country_options.active_options[cid]["color"] = value

        cases.set_total_color(cid,value)
        cases.set_live_color(cid,value)
        cases.set_daily_color(cid,value)

        deaths.set_total_color(cid,value)
        deaths.set_daily_color(cid,value)
    }else if(type == "number"){
        country_options.active_options[cid][cref] = value

        if(cref=="total_cases_linear_chart")
            cases.shift_total(cid,value)
        if(cref=="live_cases_chart")
            cases.shift_live(cid,value)
        if(cref=="daily_cases_chart")
            cases.shift_daily(cid,value)

        if(cref=="deaths_total_chart")
            deaths.shift_total(cid,value)
        if(cref=="deaths_daily_chart")
            deaths.shift_daily(cid,value)
    }

    share_uri.update()

}


//add the country options to the UI and set listener for the button clicks
country_options.add_option = function(country, color){

    row_code = `
        <tr id="option-row-`+country+`">
            <td>`+country+`</td>
            <td><input cid="`+country+`" type="color" value="`+color+`"/> </td>
            <td><input cid="`+country+`" cref="total_cases_linear_chart" type="number" value="0" min="0" step="1" /></td>
            <td><input cid="`+country+`" cref="live_cases_chart" type="number" value="0" min="0" step="1" /></td>
            <td><input cid="`+country+`" cref="daily_cases_chart" type="number" value="0" min="0" step="1" /></td>
            <td><input cid="`+country+`" cref="deaths_total_chart" type="number" value="0" min="0" step="1" /></td>
            <td><input cid="`+country+`" cref="deaths_daily_chart" type="number" value="0" min="0" step="1" /></td>
        </tr>
    `

    country_options.active_options[country] = {
        "color": color
    }

    share_uri.update()

    $('.OptionsTable tr:last').after(row_code)

    $("#option-row-"+country+" > td > input").change(function(){
        cid = $(this).attr("cid")
        type = $(this).attr("type")
        cref = $(this).attr("cref")
        value = $(this).val()

        country_options.set_new_options(cid,type,cref,value)


    })

}


//update the UI value of the option & also sets the option
country_options.set_ui_option = function(cid,type,cref,value){
    if(type == "color"){

        $("#option-row-"+cid+" > td > input[type='color']").val(value)

    }else{

        $("#option-row-"+cid+" > td > input[type='number']").each(function(i,elem){
            if($(elem).attr("cref") == cref){
                $(elem).val(value)
            }
        })

    }

    country_options.set_new_options(cid,type,cref,value)
}

//removes  the option from the UI
country_options.remove_option = function(country){

    delete country_options.active_options[country]
    $("#option-row-"+country).remove()

}