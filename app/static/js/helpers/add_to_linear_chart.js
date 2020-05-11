// this function will add a new line (dataset) to a linear or a bar chart.
// the first argument is the name of the country
// the second argument is the color
// the third argument is the cases-data object
// the second argument is the chart object


function add_to_linear_chart(country,color,cases_data,cObject){
    new_data = []
    new_labels = []

    for(i=0;i< cases_data.x.length;i++){
        new_data.push({
            x: i,
            y: parseInt(cases_data.y[i])
        })

        new_labels.push(i)
    }


    var new_dataset = {
        data: new_data,
        label:country,
        backgroundColor: color,
        borderColor: color,
        showLine:true,
        //pointRadius: 0,
        fill: false,
        showLine: true

    }
    if(cObject.data.labels.length < new_labels.length){
        cObject.data.labels = new_labels
    }

    cObject.data.datasets.push(new_dataset)

    cObject.update()
}