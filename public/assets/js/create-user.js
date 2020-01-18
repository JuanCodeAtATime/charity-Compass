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
            .then(function (res) {
                alert("Thanks " + name + ", account succesfully created.  Please login")
                window.location.href = "/login";

                console.log("Here's the response" + "-------------------------------------" + data);
            });

        // Empty each input box by replacing the value with an empty string
        $("#name").val("");
        $("#password").val("");
        $("#email").val("");

    });

});
