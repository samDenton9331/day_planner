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

$('#account_settings_dash').click(() => {
    console.log("exit");
    document.location.href = "/";
});

$('#course_1').click(() => {
    $('#course_1_div').removeClass('pr-2');
    changeBtnColor('course_1');
});

function changeBtnColor(sideBtn) {
    document.getElementById('home_button').style.backgroundColor = jQuery('#' + sideBtn).css("background-color");
    document.getElementById('home_button').style.color = jQuery('#' + sideBtn).css("color");
}