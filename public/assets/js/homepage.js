$(document).ready(function () {

    $("#scroll2Search").click(function () {
        scrollToSearch();
    });

    function scrollToSearch() {
        let searchSection = document.getElementById("homeSearch");
        searchSection.scrollIntoView();
    }


    // INITIALIZING VARIABLES
    //Charity Navigator API key
    const apiKey = "app_key=fe3148ffb1187f69826fe8ae404cca5b&pageSize=30&pageNum=10&";
    const appId = "app_id=be385ef8&";
    const baseURL = "https://api.data.charitynavigator.org/v2/Organizations?" + appId + apiKey;

    //Charity Search Parameters
    const searchCharities = "search=";


    function searchHomepg(queryURL, search) {

        if (!search) {
            alert("Please enter keyword for better search results :)")
        }

        queryURL = baseURL + searchCharities + search;

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                console.log("this is the 'get' response:" + response)
                document.getElementById("home-data-dump").innerHTML =
                    "Displaying " + response.length + " results for '" + search + "'";

                // window.location.replace("/searchresults.html");
                for (let i = 0; i < response.length; i++) {

                    // Creating and storing a div tag
                    let dataDump = $("<div>");
                    dataDump.attr({ "id": "home-data-dump", "style": "background-color: 'red'" });

                    // Creating a section listing the charity organizations
                    let n = $("<h4>").text("Charity Name: " + response[0, i].charityName);
                    n.attr({ "id": "charityName" });
                    let classif = $("<h5>").text("Classification: " + response[0, i].irsClassification.nteeClassification);
                    let city = $("<h5>").text("City: " + response[0, i].mailingAddress.city);
                    let state = $("<h5>").text("State: " + response[0, i].mailingAddress.stateOrProvince);
                    let irs = $("<h5>").text("IRS Subsection: " + response[0, i].irsClassification.subsection);
                    let lineBreak = $("<hr>")
                    lineBreak.attr({ "id": "lb" });



                    // prepending the dataDump to the newly created div
                    let searchDump = $("#home-data-dump").prepend(dataDump);


                    //appending the Charities info to the data dump div
                    searchDump.append(lineBreak);
                    searchDump.append(n);
                    searchDump.append(classif);
                    searchDump.append(city);
                    searchDump.append(state);
                    searchDump.append(irs);

                }
            });

    }


    // Function to empty out the search input field
    function clear() {
        $("#homeInput").val("");
    }

    function clearSearch() {
        document.getElementById("home-data-dump").innerHTML = [];
    }


    $("#testButton").on('click', function (event) {
        clearSearch();
        console.log("Button works!!!")
        //This prevents the buttons default behavior when clicked (which is submitting a form)
        event.preventDefault();

    });




    $("#searchHomepg").on('click', function (event) {
        searchInput = $("#homeInput").val().trim();
        console.log("Success " + "You just entered " + searchInput)
        searchHomepg("", searchInput);
        clear();
        //This prevents the buttons default behavior when clicked (which is submitting a form)
        event.preventDefault();
    });
});
