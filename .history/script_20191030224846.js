// initial array of cities
let cities = ["New York City", "Boston", "Washington DC", "Philadelphia", "Detroit", "Los Angelos"];


function displayWeatherInfo() {

    var city = $(this).attr("data-name");
    var queryURL = "https://www.openweathermap.org/data/2.5/forecast?q="city,us"&appid=c94ac49bcd423ef700d020797840e0c4";

    // creating an AJAX call for the specific city button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        // creating a div to hold the city
        let cityDiv = $("<div class='city'>");

        // storing the temperature dta
        let temperature = response.temperature;

        //create an element to have the temperature displayed
        let pOne = $("<p>").text("Temperature: " + temperature);

        //add pOne to the cityDiv
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
                btn.addClass("weather-btn");
                // add a data-attribute
                btn.attr("data-name", weather[i]);
                // provide the initial button text
                btn.text(weather[i]);
                // add the button to the weather-view div
                $("#weather-view").append(btn);

            }
        }
        // this function handles events where a movie button is clicked
        $("#add-weather").on("click", function (event) {
            event.preventDefault();
            // This line grabs the input from the textbox
            let weather = $("#weather-input").val().trim();

            // add movie from the textbox to our array
            weather.push(weather);
            // localStorage.setItem("weather", JSON.stringify(weather))

            renderButtons();
        });

        // add a click event listener to all elements with a class of "weather-btn"
        $(document).on("click", ".weather-btn", displayWeatherInfo);

        // call the renderButtons function to display the initial buttons
        renderButtons();







        



    })
} 