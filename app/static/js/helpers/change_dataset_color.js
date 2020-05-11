// this function will change the color of a dataset
// the first argument is the label of the dataset
// the second argument is the new color of the dataset
// the third argument is the chartjs object

function change_dataset_color(country,color,cObject){
    new_data = []
    new_labels = []
    set_index = -1

     for(i=0;i < cObject.data.datasets.length;i++)
    {
        set = cObject.data.datasets[i]

        if(set["label"] == country){
            set_index = i
            break

        }



    }

    if(set_index != -1){
        cObject.data.datasets[set_index]["backgroundColor"] = color
        cObject.data.datasets[set_index]["borderColor"] = color
        cObject.update()
    }


}