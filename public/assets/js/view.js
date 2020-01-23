$(document).ready(function () {


    // Make an AJAX get request to our api, including the user's book in the url
    $.get("/api/members", function (data) {

        console.log(data);
        // Call our renderBooks function to add our books to the page
        renderCharities(data);

    });




    function renderCharities(data) {

        if (data.length !== 0) {

            $("#my-char-add").empty();
            $("#my-char-add").show();

            for (var i = 0; i < data.length; i++) {

                let div = $("<div>");
                div.attr({ "class": "my-dynamic-added-charities col-md-3" });


                div.append("<h4><strong>" + data[i].name + "</strong></h4>");
                div.append("<p>Classfication: " + data[i].classification + "</p>");
                div.append("<p>City: " + data[i].city + "</p>");
                div.append("<p>State: " + data[i].state + "</p>");
                div.append("<button class='delete btn-danger' data-id='" + data[i].id + "'>Remove</button>");


                $("#my-char-add").append(div);

            }

            $(".delete").click(function () {

                $.ajax({
                    method: "DELETE",
                    url: "/api/charity/" + $(this).attr("data-id")
                })
                    // On success, run the following code
                    .then(function () {
                        console.log("Deleted Successfully!");
                    });

                $(this).closest("div").remove();

            });

        }
    }
});

