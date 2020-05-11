// This function will remove a country from a (linear) chart
// The first argument is the label of the dataset and the second argument is the chart

function remove_from_linear_chart(country,cObject){

    new_datasets = []
    removeIndex = -1
    new_labels_length = 0

    for(i=0;i < cObject.data.datasets.length;i++)
    {
        set = cObject.data.datasets[i]

        if(set["label"] == country){
            removeIndex = i

        }else{
            if(set.data.length > new_labels_length){
                new_labels_length = set.data.length

            }

        }



    }

    if(new_labels_length > 0){
        new_label = []
        for(i=0;i<new_labels_length;i++){
            new_label.push(i)
        }

        cObject.data.labels = new_label

    }

    if(removeIndex != -1){
        cObject.data.datasets.splice(removeIndex,1)
        cObject.update()

    }



}