
$(document).ready(function() {

    $('#registerForm').on("submit", function(event){
        event.preventDefault();

        const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        const passwordRegex = /^(?=.*\d)(?=.*[A-Za-z])([^\s]){8,20}$/;
        if(
            emailRegex.test($('#registerEmailInput').val()) &&
            passwordRegex.test($('#registerPasswordInput').val()) &&
            $('#registerPasswordInput').val() === $('#reenterPasswordInput').val()
        )
        {
            alert("Success!");
        } else if(!emailRegex.test($('#registerEmailInput').val())){
            alert("Not a valid email!");
        } else if(!passwordRegex.test($('#registerPasswordInput').val())){
            alert("Password must contain at least one letter, one number, and be between 8 and 20 characters");
        } else if($('#registerEmailInput').val() !== $('#reenterPasswordInput').val()){
            alert("Passwords do not match");
        }
    })
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    let forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})();

let check = function() {
    if (document.getElementById('registerPasswordInput').value ===
        document.getElementById('reenterPasswordInput').value) {
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').innerHTML = 'Passwords match!';
    } else {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = 'Passwords do not match';
    }
}

