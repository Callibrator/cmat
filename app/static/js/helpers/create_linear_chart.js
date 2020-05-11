//this function will simply create a linear chart based on some parameters!
// the first (and only) parameter is the canvas id
// the chart object will be returned

function create_linear_chart(elemid){
    var ctx = document.getElementById(elemid).getContext('2d');
    return new Chart(ctx, {
        type: 'line',
        options:{
            responsive:true,
            maintainAspectRatio:false,
            onResize:function(){

                $("#myChart").width("100%")

            },
            yAxes: [{
               position: 'left',
               gridLines: {
                 zeroLineColor: "rgba(0,255,0,1)"
               },
               scaleLabel: {
                 display: true,
                 labelString: 'y axis'
               }
             }]

         },
        data: {
            labels: [],
            datasets: []
        },
    });
}