

$document.ready(function() {

    $("#submitWeather").click(function() {

        var city = $("#city").val();

        if (city != "") {

            $.ajax( {
                url:`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${appid}`;
                `https://api.openweathermap.org/data/2.5/uvi?lat=${latitude}&lon=${longitude}&appid=${appid}`;
                method: "GET"
            }).then(function).response()

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