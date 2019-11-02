let cities = ["Boston", "Philadelphia", "Detroit", "San Francisco"];
let apiKey = "c94ac49bcd423ef700d020797840e0c4";

cities.forEach(function (city) {
    renderButtons(city);
    displayWeatherInfo(city);
})

function displayWeatherInfo(city) {
    let queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=imperial`;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        //===== Data Calculations =======
        let temperature = response.main.temp;
        let windSpeed = response.wind.speed;
        let humidity = response.main.humidity;

        // ====== Building HTML Element =====
        let cityDiv = $("<div class='city'>");
        let header = $("<h4>").text(city);
        let pOne = $("<p>").text("Temperature: " + temperature);
        let pTwo = $("<p>").text("Wind Speed: " + windSpeed);
        let pThree = $("<p>").text("Humidity: " + humidity);
        cityDiv.append(header, pOne, pTwo, pThree);

        // =======Push Element to Page =====

        $("#weather-view").empty();
        $("#weather-view").prepend(cityDiv);

    })

}

function renderButtons(city) {
    let btn = $("<button>");
    btn.addClass("city-btn");
    btn.attr("data-name", city);
    btn.text(city);
    $(".cities-array").append(btn);
    
}

$("#searchBtn").on("click", function (event) {
    event.preventDefault();

    // ====== Declare Variables ======
    let $weather = $("#city-input").val();

    // ===== Update Search History =====
    cities.push($weather);
    localStorage.setItem("weather", JSON.stringify(cities))

    // == Function calls ==
    renderButtons($weather);
    displayWeatherInfo($weather)
});

$(document).on("click", ".city-btn", function () {
    let city = $(this).attr("data-name");
    displayWeatherInfo(city);
});
