

$document.ready(function() {

    $("#submitWeather").click(function() {

        var city = $("#city").val();

        if (city != "") {

            $.ajax( {
                url:`https://api.openweathermap.org/data/2.5/weather?q=${City}&units=imperial&appid=${appid}`;
                `https://api.openweathermap.org/data/2.5/uvi?lat=${Latitude}&lon=${currLongitude}&appid=${appid}`;
             

            })else{
                $("#error").html("Field cannot be empty")

            }
        }
    })
})

// $.ajax({
//                     url: queryWeather,
//                     method: "GET"
//                 }).then(function (response) { ..   .  };

`https://api.openweathermap.org/data/2.5/uvi?lat=${currLatitude}&lon=${currLongitude}&appid=${appid}`;