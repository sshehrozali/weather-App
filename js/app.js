// On page load
document.addEventListener("DOMContentLoaded", searchWeather);


// When search button is clicked
document.getElementById("searchBtn").addEventListener("click", searchWeather);




// Function to get Weather result
function searchWeather() {

    // Get value from input box
    var inputVal = document.getElementById("searchBox").value;

    if (inputVal == "") {
        inputVal = document.getElementById("searchBox").placeholder;
    }

    var URL = "https://api.openweathermap.org/data/2.5/weather?q=" + inputVal + "&appid=da4ce88ffceaa423baf7ef7f5e305d94";

    fetch(URL)
        .then(res => res.json())
        .then(data => {

            // Fetch temperature
            var kelvin = data["main"]["temp"];
            var centi = kelvin - 273.15;
            centi = Math.round(centi) + "°C";
            document.getElementById("temp").innerText = centi;

            // Fetch City and Country name
            var city = data["name"];
            var country = data["sys"]["country"];
            var CountryAndCity = city + ", " + country;     // Concatenate City and Country name
            document.getElementById("city&country").innerText = CountryAndCity;

            // Fetch weather description
            var weatherDescp = data["weather"][0]["description"];
            weatherDescp = weatherDescp.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));   // Capitalize first letter of each word
            document.getElementById("weatherDescp").innerText = weatherDescp;


        })
}