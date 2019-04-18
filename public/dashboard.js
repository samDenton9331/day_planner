$(document).ready(function() {

    $("#dash").height($(document).height() - $('#nav-dash').height());
    
});

/* Show and hide view panel */
$('#collaspe_course_bar').click(() => {
    console.log("trigger");
    var panel = document.getElementById("course_panel");
    if (panel.style.display == "block") {
        panel.style.display = "none";
        var width = $("#main_content").width() + $("#course_panel").width();
        console.log(width);
        $("#main_content").removeClass("col-md-10");
        $("#main_content").width(width);
        console.log($("#main_content").width());
    } else {
        panel.style.display = "block";
        var width = $("#main_content").width() + $("#course_panel").width();
        console.log(width);
        $("#main_content").addClass("col-md-10");
        $("#main_content").width(width);
    }
});