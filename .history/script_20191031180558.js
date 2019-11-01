// initial array of cities
let cities = ["New York City", "Boston", "Washington DC", "Philadelphia", "Detroit", "Los Angelos"];


function displayWeatherInfo() {

    var city = $(this).attr("data-name");
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="city"&"&units=imperial&APPID=c94ac49bcd423ef700d020797840e0c4";

    // creating an AJAX call for the specific city button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        // creating a div to hold the city
        let cityDiv = $("<div class='city'>");

        // storing the temperature dta
        let temperature = response.main.temp;

        //create an element to have the temperature displayed
        let pOne = $("<p>").text("Temperature: " + temperature);

        //add pOne to the cityDiv
        cityDiv.append(pOne);
        
        // storing the wind speed data
        let windSpeed = response.wind.speed;

        //create an element to have the wind speed displayed
        let pTwo = $("<p>").text("Wind Speed: " + windSpeed);

        //add pTwo
        cityDiv.append(pTwo);

        // storing the humidity
        let humidity = response.main.humidity;

        //create an element to have the humidity displayed
        let pThree = $("<p>").text("Humidity: " + humidity);

        //add pThree
        cityDiv.append(pThree);

        // storing uvIndex 
        let uvIndex = response.uvIndex;

        //create an element to have the rating displayed
        let pFour = $("<p>").text("UV Index: " + uvIndex);

        //add pFour
        cityDiv.append(pFour);

        // retrieving the URL for the image
        let imgURL = response.Poster;

        // create an element to hold the image
        let image = $("<img>").attr("src", imgURL);

        // append the image
        cityDiv.append(image);

        // putting the entire city above the previous cities
        $("#cities-view").prepend(cityDiv);

        // function for displaying weather data
        function renderButtons() {

            $("#cities-view").empty();
            // loop through the array of cities

            for (let i = 0; i < city.length; i++) {
                // dynamically generate button for each new city
                let btn = $("<button>");
                // add a class of weather-btn to the buttons
                btn.addClass("city-btn");
                // add a data-attribute
                btn.attr("data-name", city[i]);
                // provide the initial button text
                btn.text(city[i]);
                // add the button to the cities-view div
                $("#cities-view").append(btn);

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