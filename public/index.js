$(document).ready(function() {
    // $('#create_account').height($('#log_in_button').height());
    // $('#create_account').width($('#log_in_button').width());
    console.log($("#create_account").width());
    console.log($('#log_in_button').width());

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
    // TODO
    document.location.href = "/dashboard";
});

$('#create_account').click(() => {
    $('#create_account_btn').height($('#log_in_button').height());
    document.getElementById("create_box").style.display = "block";
    document.getElementById("log_box_div").style.display = "none";
});

$('#create_account_btn').click(() => {
    // TODO
    document.location.href = "/dashboard";
});

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