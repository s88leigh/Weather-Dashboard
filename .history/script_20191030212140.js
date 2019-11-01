

function displayWeatherInfo() {

    var weather = $(this).attr("data-name");
    var queryURL = https://home.openweathermap.org/api_keys
// creating an AJAX call for the specific zipcode button being clicked
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {

    // creating a div to hold the zipcode
    var zipCodeDiv = $("<div class='zipCode'>");


})
}