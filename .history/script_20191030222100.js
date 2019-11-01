

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

        //create an element to have the weather displayed
        let pOne = $("<p>").text("Temperature: " + temperature);

        //add pOne to the ZipCodeDiv
        zipCodeDiv.append(pOne);
        
        // storing the wind speed data
        let windSpeed = response.windSpeed;

        //create an element to have the weather displayed
        let pTwo = $("<p>").tex("Wind Speed: " + windSpeed);

        //add pTwo
        zipCodeDiv.append(pTwo);

        // storing the humidity
        let humidity = response.humidity;

        //create an element to have the weather displayed
        let pThree = $("<p>").text("Humidity: " + humidity);

        //add pThree
        zipCodeDiv.append(pThree);

        // storing uvIndex 
        let uvIndex = response.uvIndex;

        //create an element to have the rating displayed
        let pFour = $("<p>").text("UV Index: " + uvIndex);

        //add pFour
        zipCodeDiv.append(pFour);

        // function for displaying weather data

        function renderButtons() {
            for (let i = 0; i < weather.length; i++) {
                // dynamically generate button for each new zipcode
                var btn = $("<button>");
                // add a class of weather-btn to the buttons
                btn.addClass("")
            }
        }




        



    })
} 