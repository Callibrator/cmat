//this function will shift the line inside a chart but few points!
//the first argument is the label of the dataset
//the second argument is the value
//the third argument is the original data of the chart
//the fourth argument is the chartObject


function shift_chart_line(label,shift,cases_data,cObject){

    set_index = -1
    new_labels_length = 0
    new_data = []
    shift = parseInt(shift)

    for(i=0;i < cObject.data.datasets.length;i++)
    {
        set = cObject.data.datasets[i]

        if(set["label"] == label){
            set_index = i

        }else{
            if(set.data.length > new_labels_length){
                new_labels_length = set.data.length

            }

        }



    }

    for(i=0;i< cases_data.x.length;i++){
        new_data.push({
            x: i+shift,
            y: parseInt(cases_data.y[i])
        })
    }

    if(shift+new_data.length > new_labels_length){
        new_labels_length = shift+new_data.length

    }

    if(new_labels_length > 0){
        new_labels = []
        for(i=0;i<new_labels_length;i++){
            new_labels.push(i)
        }

        cObject.data.labels = new_labels

    }

    if(set_index != -1){
        extra_data = []
        for(i=0;i<shift;i++)
            extra_data.push({x:i,y:0})

        cObject.data.datasets[set_index].data = extra_data.concat(new_data)
        cObject.update()
    }

}