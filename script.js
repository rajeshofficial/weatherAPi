const apikey ="89da4162e72e8fa2d8ffa2f3265b3419";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=" ;


const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");


async function checkweather(city)
{
    const response = await fetch(apiUrl + city  +`&appid=${apikey}`);
    var data = await response.json();
    console.log(data);

document.querySelector(".city").innerHTML = data.name;
document.querySelector(".country").innerHTML = data.sys.country;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C" ;
document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
document.querySelector(".wind").innerHTML = data.wind.speed +"km/h";
if(data.weather[0].main== "Clouds"){
weathericon.src = "./images/humidity.png"
}
else if(data.weather[0].main== "Clear"){
    weathericon.src = "./images/clear.png"
    }
    else if(data.weather[0].main== "Rain"){
        weathericon.src = "./images/rain.png"
        }
        else if(data.weather[0].main== "Drizzle"){
            weathericon.src = "./images/drizzle.png"
            }
            else if(data.weather[0].main== "Mist"){
                weathericon.src = "./images/mist.png"
                }
             
}
searchbtn.addEventListener("click", ()=>{
    checkweather(searchbox.value);
    searchbox.value=" ";
}

);

// Add keydown event listener to search box
searchbox.addEventListener("keydown", (event) => {
    // Check if the pressed key is the "Enter" key (key code 13)
    if (event.keyCode === 13) {
        checkweather(searchbox.value);
        searchbox.value = " ";
    }
});



