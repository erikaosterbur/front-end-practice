$(document).ready(function() {

    $('#loginForm').on("submit", function(){
        if ($('#emailInput').val() == '' || $('#passwordInput').val() == '') {
            alert("Email and password are required");
            return false;
        } else{
            $('#loginForm').attr("action", "home.html");
        }
    })

});


