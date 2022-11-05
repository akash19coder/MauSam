
const temp = document.getElementById('temp');
const desc = document.getElementById('desc');
const pressure = document.getElementById('pressure');
const humidity = document.getElementById('humidity');
const windspeed = document.getElementById('windspeed')
const sunrise = document.getElementById('sunrise')
const sunset = document.getElementById('sunset');
const visibility = document.getElementById('visibility');
function showweatherinfo(event){
    if(event.key==="Enter"){
        const Cityname = document.getElementById('Cityname').value;
        localStorage.setItem('city-name',Cityname);
        if(!Cityname){
            alert("Please enter the city name");
        }
        else{
            window.open('weatherinfo.html', '_self');

        }
       
    }
}


function showdata(event){
        if(event.key==="Enter"){
            let cityname = document.getElementById('cityname').value;
            const day_date = document.getElementById('date');
            const time = document.getElementById('time');
            const location = document.getElementById('location');
            if(!cityname){
                alert("Please Enter City Name")
            }
            else{
                location.innerText=cityname;
            }
           
            const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
            const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
            let date = new Date();
            const dayName = days[date.getDay()]
            const monthName = months[date.getMonth()];
            const day = date.getDate();
            const year = date.getFullYear();
            let hours =date.getHours();
            let am_pm = "am";
            if(hours>12){
                hours=hours-12;
                am_pm="pm";
            }
            let minutes = null;
            if(date.getMinutes()<10){
                     minutes = '0'+ date.getMinutes();
            }
            else{
                     minutes = date.getMinutes();
            }
            
            day_date.innerText = `${dayName} | ${monthName} ${day},${year}`;
            time.innerText = `${hours}:${minutes} ${am_pm}`
            
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=05e92e1ea37b34406bc5b8ecf1045eb9&units=metric`;
            
            async function getUrl(url){
                const response = await fetch(url);  
                const data = await response.json(); 
                const arrData = [data]; 
            
                //Extracting tempareture
                const tempareture = arrData[0].main.temp;
                temp.innerText=Math.floor(tempareture);
               
            
                //Extracting pressure
                const getpressure = arrData[0].main.pressure;
                pressure.innerText = getpressure + 'hPa';
            
                //Extracting humidity
                const gethumidity = arrData[0].main.humidity;
                humidity.innerText = gethumidity + "%";
            
                //Extracting visibility
                const getvisibility = arrData[0].visibility;
                visibility.innerText = getvisibility/1000 +"km";
            
                //Extracting windspeed
                const getwindspeed = arrData[0].wind.speed;
                windspeed.innerText = getwindspeed+"m/s";
            
                //Extracting description
                const description = arrData[0].weather[0].main;
                desc.innerText = description;
            
                //Extracting sunrise info
                const getsunrise = arrData[0].sys.sunrise;
                const sunriseDate = new Date(getsunrise*1000);
                const sunriseHour = sunriseDate.getHours();
                const sunriseMinutes = sunriseDate.getMinutes();
                if(sunriseMinutes<10){
                    sunriseMinutes='0'+sunriseMinutes;
                }
                    sunrise.innerText = `${sunriseHour}:${sunriseMinutes}`
                
                
                
                //Extracting sunset info
                const getsunset = arrData[0].sys.sunset;
                const sunsetDate = new Date(getsunset*1000);
                var sunsetHour = sunsetDate.getHours();
                var sunsetMinutes = sunsetDate.getMinutes();
                if(sunsetMinutes<10){
                    sunsetMinutes='0'+sunsetMinutes;
                }
                    sunset.innerText = `${sunsetHour}:${sunsetMinutes}`
               
            }
            
            getUrl(url);
        } 

}
function showData(){
    const cityname = localStorage.getItem('city-name');
    const cty = document.getElementById('cityname');
    cty.value=cityname;
    const day_date = document.getElementById('date');
    const time = document.getElementById('time');
    const location = document.getElementById('location');
    if(!cityname){
        alert("Please Enter City Name")
    }
    else{
        location.innerText=cityname;
    }
   
    const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    let date = new Date();
    const dayName = days[date.getDay()]
    const monthName = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    let hours =date.getHours();
    let am_pm = "am";
            if(hours>12){
                hours=hours-12;
                am_pm="pm";
            }
    let minutes = null;
    if(date.getMinutes()<10){
             minutes = '0'+ date.getMinutes();
    }
    else{
             minutes = date.getMinutes();
    }
    
    day_date.innerText = `${dayName} | ${monthName} ${day},${year}`;
    time.innerText = `${hours}:${minutes} ${am_pm}`
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=05e92e1ea37b34406bc5b8ecf1045eb9&units=metric`;
    
    async function getUrl(url){
        const response = await fetch(url);  
        const data = await response.json(); 
        const arrData = [data]; 
    
        //Extracting tempareture
        const tempareture = arrData[0].main.temp;
        temp.innerText=Math.floor(tempareture);
       
    
        //Extracting pressure
        const getpressure = arrData[0].main.pressure;
        pressure.innerText = getpressure + 'hPa';
    
        //Extracting humidity
        const gethumidity = arrData[0].main.humidity;
        humidity.innerText = gethumidity + "%";
    
        //Extracting visibility
        const getvisibility = arrData[0].visibility;
        visibility.innerText = getvisibility/1000 +"km";
    
        //Extracting windspeed
        const getwindspeed = arrData[0].wind.speed;
        windspeed.innerText = getwindspeed+"m/s";
    
        //Extracting description
        const description = arrData[0].weather[0].main;
        desc.innerText = description;
    
        //Extracting sunrise info
        const getsunrise = arrData[0].sys.sunrise;
        const sunriseDate = new Date(getsunrise*1000);
        const sunriseHour = sunriseDate.getHours();
        const sunriseMinutes = sunriseDate.getMinutes();
        if(sunriseMinutes<10){
            sunriseMinutes='0'+sunriseMinutes;
        }
            sunrise.innerText = `${sunriseHour}:${sunriseMinutes}`
        
        
        
        //Extracting sunset info
        const getsunset = arrData[0].sys.sunset;
        const sunsetDate = new Date(getsunset*1000);
        var sunsetHour = sunsetDate.getHours();
        var sunsetMinutes = sunsetDate.getMinutes();
        if(sunsetMinutes<10){
            sunsetMinutes='0'+sunsetMinutes;
        }
            sunset.innerText = `${sunsetHour}:${sunsetMinutes}`
       
    }
    
    getUrl(url);

}
