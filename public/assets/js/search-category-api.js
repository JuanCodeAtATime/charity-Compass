$(document).ready(function () {


    // INITIALIZING VARIABLES
    //Charity Navigator API key
    const apiKey = "app_key=fe3148ffb1187f69826fe8ae404cca5b&pageSize=30&pageNum=10&";
    const appId = "app_id=be385ef8&";
    const baseURL = "https://api.data.charitynavigator.org/v2/Organizations?" + appId + apiKey;

    //Charity Search Parameters
    const searchCharities = "search=";
    const category_search = "categoryID=";
    let clickCategory = "";
    let b = document.getElementById("invisible-cat-box");

    // Charity category cards input numerical value into invisible field, which fetch data by numerical category.



    function searchOrgs(queryURL, search) {

        queryURL = baseURL + searchCharities + search;

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .done(function (response) {
                console.log("this is the 'get' response:" + response)

                for (let i = 0; i < response.length; i++) {

                    // Creating and storing a div tag
                    let dataDump = $("<div>");
                    let buttonArray = $("<form>");
                    // buttonArray.attr({ "action method": "post" })
                    dataDump.attr({ "class": "search-dump form-group" });

                    //Created attributes containing src properties for both still and animated gifs

                    // Creating a section listing the charity organizations
                    let n = $("<h4>").text("Charity Name: " + response[0, i].charityName);
                    n.attr({ "id": "charityName" });
                    let classif = $("<h5>").text("Classification: " + response[0, i].irsClassification.nteeClassification);
                    let city = $("<h5>").text("City: " + response[0, i].mailingAddress.city);
                    let state = $("<h5>").text("State: " + response[0, i].mailingAddress.stateOrProvince);
                    let irs = $("<h5>").text("IRS Subsection: " + response[0, i].irsClassification.subsection);

                    //Setting attribute IDs for Charity line items to access these values.
                    n.attr({ "class": "form-group", "id": "charName" });
                    classif.attr({ "class": "form-group", "id": "classif" });
                    city.attr({ "class": "form-group", "id": "charCity" });
                    state.attr({ "class": "form-group", "id": "charState" });

                    // Buttons for Charities
                    let addChar = $("<button type='button' class='btn-primary' id='addChar'>Add to My Charities</button>");
                    let charity_URL = $("<button type='button' class='btn-danger'>Visit Site</button>").on("click", function () { window.open(response[0, i].websiteURL) });
                    let give2Char = $("<button type='button' class='btn-success' id='give'>Give or Learn More</button>").on("click", function () { window.open(response[0, i].charityNavigatorURL) });
                    let lineBreak = $("<hr>")


                    // Prepending the dataDump to the newly created div
                    let searchDump = $("#search-data-dump").append(dataDump);


                    //Prepending the Charities info to the data dump div
                    searchDump.append(n);
                    searchDump.append(classif);
                    searchDump.append(city);
                    searchDump.append(state);
                    searchDump.append(irs);
                    searchDump.append(addChar);
                    searchDump.append(give2Char);
                    searchDump.append(charity_URL);
                    searchDump.append(lineBreak);

                    // Variables for dynamic buttons

                    //DYNAMIC API 'Add to My Charities' BUTTON TO INPUT FIELDS

                    let a = document.getElementById("char-name-input");
                    let b = document.getElementById("cause-input");
                    let c = document.getElementById("char-city-input");
                    let d = document.getElementById("char-state-input");

                    $("#addChar").on("click", function () {
                        a.value = response[0, i].charityName;
                        b.value = response[0, i].irsClassification.nteeClassification;
                        c.value = response[0, i].mailingAddress.city;
                        d.value = response[0, i].mailingAddress.stateOrProvince;
                    });

                    // BUTTON FROM INPUT FIELDS TO ADD FUNCTION
                    $("#addCharFields").click(function () {

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


                }
            });
    }

    // Function to empty out the search input field
    function clear() {
        $("#search").empty();
    }

    $("#search-orgs").on('click', function (event) {

        searchInput = $("#search").val().trim();
        console.log("Success " + "You just entered " + searchInput)

        searchOrgs("", searchInput);
        clear();

        //This prevents the buttons default behavior when clicked (which is submitting a form)
        event.preventDefault();

    });

    // FUNCTION for the Search field.

    function searchCategory(queryURL, search) {

        queryURL = (baseURL + category_search) + search;

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .done(function (response) {

                for (let i = 0; i < response.length; i++) {

                    // Creating and storing a div tag
                    let dataDump = $("<div>");


                    //Created attributes containing src properties for both still and animated gifs

                    //Declaring variables for API fetch responses
                    let n = $("<h4>").text("Charity Name: " + response[0, i].charityName);
                    n.attr({ "id": "charityName" });
                    let classif = $("<h5>").text("Classification: " + response[0, i].irsClassification.nteeClassification);
                    let city = $("<h5>").text("City: " + response[0, i].mailingAddress.city);
                    let state = $("<h5>").text("State: " + response[0, i].mailingAddress.stateOrProvince);
                    let irs = $("<h5>").text("IRS Subsection: " + response[0, i].irsClassification.subsection);

                    // Buttons for Charities
                    let charity_site = $("<button type='button' class='btn-danger'>Visit Site</button>").on("click", function () { window.open(response[0, i].websiteURL) });
                    let addChar = $("<button type='button' class='btn-primary' id='addChar'>Add to My Charities</button>");
                    let give2Char = $("<button type='button' class='btn-success' id='give'>Give or Learn More</button>").on("click", function () { window.open(response[0, i].charityNavigatorURL) });
                    let lineBreak = $("<hr>")
                    // Prepending the dataDump to the newly created div
                    let categoryDump = $("#cat-data-dump").append(dataDump);



                    //Prepending the Charities info elements to the data dump div
                    categoryDump.append(n);
                    categoryDump.append(classif);
                    categoryDump.append(city);
                    categoryDump.append(state);
                    categoryDump.append(irs);
                    categoryDump.append(addChar);
                    categoryDump.append(give2Char);
                    categoryDump.append(charity_site);
                    categoryDump.append(lineBreak);


                    // Variables for dynamic buttons

                    //DYNAMIC API 'Add to My Charities' BUTTON TO INPUT FIELDS

                    let a = document.getElementById("char-name-input");
                    let b = document.getElementById("cause-input");
                    let c = document.getElementById("char-city-input");
                    let d = document.getElementById("char-state-input");

                    $("#addChar").on("click", function () {
                        a.value = response[0, i].charityName;
                        b.value = response[0, i].irsClassification.nteeClassification;
                        c.value = response[0, i].mailingAddress.city;
                        d.value = response[0, i].mailingAddress.stateOrProvince;
                    });


                    // BUTTON FROM INPUT FIELDS TO ADD FUNCTION
                    $("#addCharFields").click(function () {

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


                }
            });
    }


    $(document).on("click", "#animal", function () {
        b.value = 1;
        console.log("this button works " + b.value)
    });

    $(document).on("click", "#arts", function () {
        b.value = 2;
        console.log("this Arts button works " + b.value)

    });
    $(document).on("click", "#ed", function () {
        b.value = 3;
        console.log("this Education button works " + b.value)

    });
    $(document).on("click", "#enviro", function () {
        b.value = 4;
        console.log("this Enviroment button works " + b.value)

    });
    $(document).on("click", "#health", function () {
        b.value = 5;
        console.log("this Health button works " + b.value)

    });
    $(document).on("click", "#human-svcs", function () {
        b.value = 6;
        console.log("this Human Services button works " + b.value)

    });
    $(document).on("click", "#intern", function () {
        b.value = 7;
        console.log("this International button works " + b.value)

    });
    $(document).on("click", "#human-rights", function () {
        b.value = 8;
        console.log("this Human Rights button works " + b.value)

    });
    $(document).on("click", "#religion", function () {
        b.value = 9;
        console.log("this Religion button works " + b.value)

    });
    $(document).on("click", "#comm-dev", function () {
        b.value = 10;
        console.log("this Community Development button works " + b.value)

    });
    $(document).on("click", "#res-pub", function () {
        b.value = 11;
        console.log("this Research & Public Policy button works " + b.value)

    });


    $(document).on("click", ".thumbnails2", function () {
        let clickCategory = b.value;
        searchCategory("", clickCategory)
    });


});
