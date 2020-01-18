$(document).ready(function () {


    // When user clicks add-btn
    $("#login-btn").on("click", function (event) {
        let user = {
            password: $("#password").val().trim(),
            email: $("#email").val().trim()
        };
        console.log("This is the user " + user)

        event.preventDefault();

        // Send an AJAX POST-request with jQuery
        $.post("/api/login", user)
            // On success, run the following code
            .then(function (req, response) {
                // Log the data we found
                console.log(response);
                alert("Login Successful!")
                window.location.href = "/members";


            });

        // Empty each input box by replacing the value with an empty string
        $("#email").val("");
        $("#password").val("");

    });

});