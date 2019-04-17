$(document).ready(function() {
    console.log("loading");
});

$('#add_new_course').click(function(e) {
    var node = document.createElement("LI");             
    var textnode = document.createTextNode("Adding Courses");         
    node.appendChild(textnode);                              
    document.getElementById("current_courses").appendChild(node); 
        
    $('#add_course_modal').modal('hide');

    $.ajax({
        type: 'get',            //Request type
        dataType: 'json',       //Data type - we will use JSON for almost everything
        url: '/add_course',   //The server endpoint we are connecting to
        data: {
        },
        success: function (data) {
            console.log(data);
        },        
    });
});

$('#log_in_button').click(() => {
    console.log("fire");
    document.location.href = "/dashboard";
})

$('#log_out').click(() => {
    console.log("fire");
    document.getElementById("log_in_button_menu").style.display = "block";
    document.getElementById("log_out").style.display = "none";
})

function add_new_user () {
    let username = 'sam';
    let pwd = 'pwd';
    $.ajax({
        type: 'get',            //Request type
        dataType: 'json',       //Data type - we will use JSON for almost everything
        url: '/add_new_user',   //The server endpoint we are connecting to
        data: {
            username: username,
            pwd: pwd
        },
        success: function (data) {
            console.log(data);
        },        
    });
}