$(document).ready(function () {
    // The code in add.js handles what happens when the user clicks the "Add to My Charities" button.

    // BUTTON FROM INPUT FIELDS TO ADD FUNCTION
    $("#addCharFields").click(function () {
        console.log("This add button works");
        event.preventDefault();

        // Make a newBook object
        var newCharity = {
            name: $("#char-name-input").val().trim(),
            classification: $("#cause-input").val().trim(),
            city: $("#char-city-input").val().trim(),
            state: $("#char-state-input").val().trim()
        };

        // Send an AJAX POST-request with jQuery
        $.post("/api/new", newCharity)
            // On success, run the following code

            .then(function (data) {
                // Log the data we found
                console.log(data);
            });

        // Empty each input box by replacing the value with an empty string
        $("#char-name-input").val("");
        $("#cause-input").val("");
        $("#char-city-input").val("");
        $("#char-state-input").val("");

    });

})
