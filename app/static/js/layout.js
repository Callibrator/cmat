window.data_status = "init"
window.data = {}

$(document).ready(function(){

    //Download and store the data locally

    $.getJSON("/datasets",function(data){
        window.data = data
        window.data_status="complete"

        $("#loading-top-bar-text").text("Loading Completed!")
        $("#loading-data-bar").css("display","none")
    }).fail(function(){
        window.data_status = "fail"
        $("#loading-data-bar").css("animation","none")
        $("#loading-data-bar").css("background","rgba(184, 94, 59,0.5)")
        $("#loading-top-bar-text").text("Loading Failed!")
    })



})