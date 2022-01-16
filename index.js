let locationRef = document.getElementById('location_p');
let tempicon = document.getElementById('temp-icon');
let tempvalue = document.getElementById('temp-value');
let climate = document.getElementById('climate');
let iconfile;
const searchInput = document.getElementById('search-input');
const searchButton = getElementById('search-button');


window.addEventListener("load", () => {
    let long;
    let lat;

    if(navigator.geolocation) {

        navigator.geolocation.getCurrentPosition((position) => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const proxy = "https://cors-anywhere.herokuapp.com/";

            const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid= 141b0817cbbb961b25206f9d97d516f3`;

            fetch(api)
            .then((response) => response.json())
                
            .then((data) => {
                const{name} = data;

                const{fells_like} = data.main;

                const{id, main} = data.weather[0];

                locationRef.textContent = name;

                climate.textContent = main;

                tempvalue.textContent = Math.round(fells_like - 273);
                



               
            })
        })
    }


})
