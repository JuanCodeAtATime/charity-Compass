// The code in add.js handles what happens when the user clicks the "Add to My Charities" button.

// When user clicks add-btn
$("#addChar").on("click", function (event) {
    event.preventDefault();

    // Add a addCharity object
    var addCharity = {
        name: $("#charName").value,
        classification: $("#classif").value,
        city: $("#charCity").value,
        state: $("#charState").value
    };

    // Send an AJAX POST-request with jQuery
    $.post("/api/new", addCharity)
        // On success, run the following code
        .then(function (data) {
            // Log the data we found
            console.log(data);
        });

    // Empty each input box by replacing the value with an empty string
    $("#charName").value = "";
    $("#classif").value = "";
    $("#charCity").value = "";
    $("#charState").value = "";

});
