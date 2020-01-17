$(document).ready(function () {

    let firstName = "";
    // When user clicks add-btn
    $("#login-btn").on("click", function (event) {
        let user = {
            firstName: $("#firstName").val().trim(),
            password: $("#password").val().trim(),
            email: $("#email").val().trim()
        };
        console.log("This is the user " + user)

        event.preventDefault();

        // Send an AJAX POST-request with jQuery
        $.post("/api/login", user)
            // On success, run the following code
            .then(function (req, response) {
                function pushFirstName() {
                    document.getElementById("member-name").innerHTML = "firstName";
                };
                // Log the data we found
                console.log(response);
                window.location.href = "/members";
                pushFirstName();


            });

        // Empty each input box by replacing the value with an empty string
        $("#email").val("");
        $("#password").val("");

    });

});