$(document).ready(function() {
    // $('#create_account').height($('#log_in_button').height());
    // $('#create_account').width($('#log_in_button').width());
    console.log($("#create_account").width());
    console.log($('#log_in_button').width());

});

$('#log_in_button').click(() => {
    // TODO
    $('#create_account_btn').height($('#log_in_button').height());
    document.getElementById("select_planner").style.display = "block";
    document.getElementById("log_box_div").style.display = "none";

    var user_name = document.getElementById("email").value;
    var pwd = document.getElementById("password").value;

    $.ajax({
        type: 'get',            //Request type
        dataType: 'json',       //Data type - we will use JSON for almost everything
        url: '/verify_user',   //The server endpoint we are connecting to
        data: {
            user_name: user_name,
            pwd: pwd
        },
        success: function (data) {
            console.log(data);
        },
    });
});

// The user wants to create a new account on the website
$('#create_account').click(() => {
    $('#create_account_btn').height($('#log_in_button').height());
    document.getElementById("create_box").style.display = "block";
    document.getElementById("log_box_div").style.display = "none";
});

// if the user wants to go back
$('#create_account_back_button').click(() => {
    document.getElementById("create_box").style.display = "none";
    document.getElementById("log_box_div").style.display = "block";
});

$('#create_account_btn').click(() => {
    var name = document.getElementById("name").value;
    var user_name = document.getElementById("new_email").value;
    var pwd = document.getElementById("password_create").value;
    // var pws_2 = document.getElementById("password_reenter").value;

    console.log(user_name);
    
    $.ajax({
        type: 'get',            //Request type
        dataType: 'json',       //Data type - we will use JSON for almost everything
        url: '/add_new_user',   //The server endpoint we are connecting to
        data: {
            name: name,
            user_name: user_name,
            pwd: pwd
        },
        success: function (data) {
            console.log(data);
        },
    });

    document.getElementById("select_planner").style.display = "block";
    document.getElementById("create_box").style.display = "none";
});

$('#open_planner').click(() => {
    // TODO
    document.location.href = "/dashboard";
});