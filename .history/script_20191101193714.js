// initial array of cities
let cities = [ "Boston", "Philadelphia", "Detroit", "San Francisco"];



cities.forEach(function(city){
    renderButtons(city);
    displayWeatherInfo(city);
})
// displayWeatherInfo("Boston");

function displayWeatherInfo(city) {
    let apiKey = "c94ac49bcd423ef700d020797840e0c4"
    

    
    // let city = $(this).attr("data-name");
    let queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=imperial`;

    
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

//         // storing uvIndex 
//         let uvIndex = response.uvIndex;

//         //create an element to have the rating displayed
//         let pFour = $("<p>").text("UV Index: " + uvIndex);

//         //add pFour
//         cityDiv.append(pFour);

//         // // retrieving the URL for the image
//         // let imgURL = response.Poster;

//         // // create an element to hold the image
//         // let image = $("<img>").attr("src", imgURL);

//         // append the image
//         // cityDiv.append(image);

        // putting the entire city above the previous cities
        $("#weather-view").empty();
        $("#weather-view").prepend(cityDiv);
    })

}

    // function for displaying weather data
    function renderButtons(city) {

    //     $("#weather-view").empty();
        // loop through the array of cities

        // for (let i = 0; i < cities.length; i++) {
            // console.log(cities);

            
            // dynamically generate button for each new city
            let btn = $("<button>");
            // add a class of weather-btn to the buttons
            btn.addClass("city-btn");
            // add a data-attribute
            btn.attr("data-name", city);
            // provide the initial button text
            btn.text(city);
            // add the button to the cities-view div
            $(".cities-array").append(btn);

        
    }
        // this function handles events where a movie button is clicked
        $("#searchBtn").on("click", function (event) {
            event.preventDefault();
            // This line grabs the input from the textbox
            let $weather = $("#city-input").val();
            renderButtons();
            displayWeatherInfo

            // displays the city info in the 'city-info' div
            // $.ajax({
            //     url: queryURL,
            //     method: 'POST'
            // }).then(function(response){
                
            // })
       
            // add city from the textbox to our array
            // city.push(city);
            // localStorage.setItem("weather", JSON.stringify(weather))

            
        });

//         // add a click event listener to all elements with a class of "weather-btn"
//         // $(document).on("click", ".weather-btn", displayWeatherInfo);

//         // call the renderButtons function to display the initial buttons
//         renderButtons();

//     })
// } 