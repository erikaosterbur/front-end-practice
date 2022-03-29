$(document).ready(function() {

    $('#registerForm').on("submit", function(){
        if (
            $('#registerUsernameInput').val() == '' ||
            $('#registerEmailInputInput').val() == '' ||
            $('#registerFirstNameInput').val() == '' ||
            $('#registerLastNameInput').val() == '' ||
            $('#passwordInput').val() == '' ||
            $('#reenterPasswordInput').val() == ''
        ) {
            alert("All fields are required to register");
            return false;
        }
        return true;
    })
});