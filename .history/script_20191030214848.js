

function displayWeatherInfo() {

    var weather = $(this).attr("data-name");
    var queryURL = "https://www.openweathermap.org/data/2.5/forecast?q="portsmouth, us"&appid=c94ac49bcd423ef700d020797840e0c4";

    // creating an AJAX call for the specific zipcode button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        // creating a div to hold the zipcode
        let zipCodeDiv = $("<div class='zipCode'>");

        // storing the temperature dta
        let temperature = response.temperature;

        //create an element to have the rating displayed
        let pOne = $("<p>").text("Temperature: " + temperature);
        
        // storing the wind speed data
        let windSpeed = response.windSpeed;

        //create an element to have the rating displayed
        let pTwo = $("<p>").tex("Wind")

        // storing the humidity
        let humidity = response.humidity;

        // storing uvIndex 
        let uvIndex = response.uvIndex;

        



    })
} 