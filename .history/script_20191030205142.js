// creating an AJAX call for the specific zipcode button being clicked
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {

    // creating a div to hold the zipcode
    var zipcodeDiv = 
})