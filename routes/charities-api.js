
// INITIALIZING VARIABLES
//Charity Navigator API key
const apiKey = "app_key=fe3148ffb1187f69826fe8ae404cca5b&pageSize=10&pageNum=10&";
const appId = "app_id=be385ef8&";
const baseURL = "https://api.data.charitynavigator.org/v2/Organizations?" + appId + app_key;
//Charity Search Parameters
const searchCharities = "search=";
const category_search = "categoryID=";

let clickCategory = "";
let selCountry = "";
let buttonCountry = "https://api.giphy.com/v1/gifs/search?q=" + selCountry + apiLimitTen;


// FUNCTIONS
//Arguments in function below include queryURL and "search" variable which
// is the country button pressed by User 
function searchCategory(queryURL, search) {

    queryURL = baseURL + category_search + search;

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .done(function (response) {

            for (let i = 0; i < response.data.length; i++) {

                // Creating and storing a div tag
                let dataDump = $("<div>");
                //Created attributes containing src properties for both still and animated gifs



                // Creating a paragraph tag with the result item's rating
                let p = $("<p>").text("Rating: " + response.data[0, i].rating);

                // Prepending the dataDump to the newly created div
                let categoryDump = $("#cat-data-dump").prepend(dataDump);

                //Prepending the Ratings paragraph element to the gifsDiv
                categoryDump.prepend(p);

            }




        });

}

$(document).on("click", ".country", function () {

    let clickCategory = $(this).attr("data-name");
    searchCategory("", clickCategory)

});
