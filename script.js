var api_id = "cace8152f2da25eef0873a0a7f58307f"
let api = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

let cel = document.querySelector(".cel")

let city_name = document.querySelector(".city_name")

let humidity = document.querySelector(".humidity")

let wind_speed = document.querySelector(".wind_speed")

let vbtn = document.querySelector(".btn_")

var w = document.querySelector(".weather_cond")










async function weatherReport(city){
    
    let fatch_api = await fetch(`${api}${city}&appid=${api_id}`)
    let res = await fatch_api.json()
    console.log(res)
    city_name.innerHTML = res.name
    cel.innerHTML  = `${Math.floor(res.main.temp)}° C`
    humidity.innerHTML = `${res.main.humidity}%`
    wind_speed.innerHTML = `${Math.floor(res.wind.speed)}km/h`

    if(res.weather[0].main=="Clouds"){
        console.log(w.src = "/Images/clouds.png")

    }
    else if(res.weather[0].main=="Clear"){
        console.log(w.src = "/Images/clear.png")

    }
    else if(res.weather[0].main=="Drizzle"){
        console.log(w.src = "/Images/drizzle.png")

    }
    else if(res.weather[0].main=="Mist"){
        console.log(w.src = "/Images/mist.png")

    }
    else if(res.weather[0].main=="Rain"){
        console.log(w.src = "/Images/rain.png")

    }
    else if(res.weather[0].main=="Snow"){
        console.log(w.src = "/Images/snow.png")

    }





    


}



vbtn.addEventListener("click",function(){
    let input_ = document.querySelector("#place_input")
    




    weatherReport(input_.value)


    input_.value = ""

})



