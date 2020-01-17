import { render } from "ejs";

$(document).ready(function () {
    // When user clicks add-btn
    $("#create-user-btn").on("click", function (event) {
        event.preventDefault();

        // Make a newBook object
        var newUser = {
            name: $("#name").val().trim(),
            password: $("#password").val().trim(),
            email: $("#email").val().trim()

        };

        // Send an AJAX POST-request with jQuery
        $.post("/api/signup", newUser)
            // On success, run the following code
            .then(function (data) {

                console.log("Here's the problem" + "-------------------------------------" + data);
            });

        // Empty each input box by replacing the value with an empty string
        $("#name").val("");
        $("#password").val("");
        $("#email").val("");

    });

});
