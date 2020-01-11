$(document).ready(function () {


    function startSurvey() {

        document.getElementById("survey-dump").innerHTML = "You have &nbsp :" + tenSecTimer + "&nbsp &nbsp seconds left.";
        document.getElementById("surveyBtn").innerHTML = "";


    }

    //This ID for Start Game controls the green Start button on the home screen
    //It disappears upon click.

    $("#surveyBtn").click(function () {
        startSurvey();
    });

});
