$(document).ready(function () {
    // When user clicks add-btn
    $("#login-btn").on("click", function (event) {
        event.preventDefault();

        // Send an AJAX POST-request with jQuery
        $.post("/api/members", user)
            // On success, run the following code
            .then(function (data) {
                // Log the data we found
                console.log(data);
            });

        // Empty each input box by replacing the value with an empty string
        $("#email").val("");
        $("#password").val("");

    });

});