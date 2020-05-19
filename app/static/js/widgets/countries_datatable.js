// Country Datatable Functions

country_datatable = {}
//loading all countries to the data table
country_datatable.load_data_table = function(){

    var data = []

    if(window.data.hasOwnProperty("general")){
        if(window.data.general.hasOwnProperty("data")){
             var NA = ""

             for(c in window.data.general.data)
             {
                if ("total_cases" in window.data.general.data[c]){
                    total_cases = parseInt(window.data.general.data[c]["total_cases"])
                    if(isNaN(total_cases))
                        total_cases = NA
                }else{
                    total_cases = NA
                }

                if ("total_deaths" in window.data.general.data[c]){
                    total_deaths = parseInt(window.data.general.data[c]["total_deaths"])
                     if(isNaN(total_deaths))
                        total_deaths = NA
                }else{
                    total_deaths = NA
                }

                if ("serious" in window.data.general.data[c]){
                    serious = parseInt(window.data.general.data[c]["serious"])
                     if(isNaN(serious))
                        serious = NA
                }else{
                    serious = NA
                }

                if ("total_tests" in window.data.general.data[c]){
                    total_tests = parseInt(window.data.general.data[c]["total_tests"])
                     if(isNaN(total_tests))
                        total_tests = NA
                }else{
                    total_tests = NA
                }

                if ("population" in window.data.general.data[c]){
                    population = parseInt(window.data.general.data[c]["population"])
                     if(isNaN(population))
                        population = NA
                }else{
                    population = NA
                }



                data.push([
                    c,
                    total_cases,
                    total_deaths,
                    serious,
                    total_tests,
                    population,


                ])
             }

        }

    }


    var t = $('#countries-data-table').DataTable();


    t.rows.add(data).draw( false );


    t.order([1, 'desc']).draw();




}

//initialization options of the countries data table
country_datatable.init_table = function(){

    $('#countries-data-table').DataTable({
        "paging": false,
        "columnDefs": [ {
            "targets": -1,
            "data": null,
            "defaultContent": "<label><input type='checkbox' /><span>Display</span></label>"
        } ]
    });


    //Display Checkbox Behavior
    $('#countries-data-table tbody').on( 'change', 'input', function () {
        var data = $('#countries-data-table').DataTable().row( $(this).parents('tr') ).data();
        //alert( data[0] +"'s salary is: "+ data[ 2 ] );
        manage_country(data[0]) //manage_country exist's in index.js

    } );

}