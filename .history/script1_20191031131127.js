

$document.ready(function() {

    $("#submitWeather").click(function() {

        var city = $("#city").val();

        if (city != "") {

            $.ajax( {
                url:`https://api.openweathermap.org/data/2.5/weather?q=${currCity}&units=imperial&appid=${appid}`;
                
             

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