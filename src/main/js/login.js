$(document).ready(function() {

    $('#loginForm').on("submit", function(){
        if ($('#usernameInput').val() == '' || $('#passwordInput').val() == '') {
            alert("Username and password are required");
            return false;
        }
        return true;
    })
});


