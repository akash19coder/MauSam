// var cityname = document.getElementById('cityname');
// function showalert(event){
//         if(event.key==="Enter"){
           
//         } 

// }

const day_date = document.getElementById('date');
const time = document.getElementById('time');

const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
let date = new Date();
const dayName = days[date.getDay()]
const monthName = months[date.getMonth()];
const day = date.getDate();
const year = date.getFullYear();
let hours =date.getHours();
let minutes = null;
if(date.getMinutes()<10){
         minutes = '0'+ date.getMinutes();
}
else{
         minutes = date.getMinutes();
}

day_date.innerText = `${dayName} | ${monthName} ${day},${year}`;
time.innerText = `${hours}:${minutes}`

const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=05e92e1ea37b34406bc5b8ecf1045eb9&units=metric";

async function getUrl(url){
    const response = await fetch(url);  
    const data = await response.json(); 
    const arrData = [data]; 
    const temp = arrData[0].main.temp;
    const pressure = arrData[0].main.pressure;
    const humidity = arrData[0].main.humidity;
    const visibility = arrData[0].visibility;
    const windspeed = arrData[0].wind.speed;
    const desc = arrData[0].weather[0].main;
    const sunrise = arrData[0].sys.sunrise;
    const sunset = arrData[0].sys.sunset;
    console.log(arrData[0].sys.sunrise);
}

getUrl(url);