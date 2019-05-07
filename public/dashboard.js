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

$('#add_new_course').click(() => {
    $.ajax({
        type: 'get',            
        dataType: 'json',       
        url: '/add_course',    
        data: {
            
        },
        success: function (data) {
            add_new_course();
        },
    });
});

// Changing the dashboard pages
var current_page = "home_content";

$('#home_button').click(() => {
    current_page = show_new_page(current_page, "home_content");
});

$('#schedule_button').click(() => {
    current_page = show_new_page(current_page, "schedule_content");
});

$('#notes_button').click(() => {
    current_page = show_new_page(current_page, "notes_content");
});

// *************** Functions ******************

// Add a new course to the side panels
function add_new_course() {
    var courses = document.getElementById("course_navs");
    var courses_add_button = document.getElementById("add_another_course");

    // Create the div and classes for the div
    var div = document.createElement("DIV");
    var divAtt = document.createAttribute("class");
    divAtt.value = "row pl-2 pr-2 pt-2";
    div.setAttributeNode(divAtt);

    // Create the button for the course to go onto the div
    var btn = document.createElement("BUTTON");
    var att = document.createAttribute("class"); 
    att.value = "course_button";
    btn.setAttributeNode(att);  
    btn.innerHTML = document.getElementById("course_name").value;

    // adding the button to the div
    div.appendChild(btn);
    courses.appendChild(div);
    courses.appendChild(courses_add_button);

    // Close the modal
    $('#add_new_course_modal').modal('hide');
}

function show_new_page(current_page, new_page) {
    document.getElementById(new_page).style.display = "block";
    document.getElementById(current_page).style.display = "none";
    return new_page;
}

function changeBtnColor(sideBtn) {
    document.getElementById('home_button').style.backgroundColor = jQuery('#' + sideBtn).css("background-color");
    document.getElementById('home_button').style.color = jQuery('#' + sideBtn).css("color");
}