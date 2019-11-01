

$document.ready(function() {

    $("#submitWeather").click(function() {

        var city = $("#city").val();

        if (city != "") {

            $.ajax( {
                url:`https://api.openweathermap.org/data/2.5/weather?q=${currCity}&units=imperial&appid=${appid}`;
                
                $.ajax({
                    url: queryWeather,
                    method: "GET"
                }).then(function (response) { ...  };

            })else{
                $("#error").html("Field cannot be empty")

            }
        }
    })
})