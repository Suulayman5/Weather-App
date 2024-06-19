const apiKey = '41258f6925adad10a38d6f7f4e85b072'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='

const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search Button')
const weatherIcon = document.querySelector('.weather-icon')

async function checkWeather(city){
    const reponse = await fetch(apiUrl + city + `&appid=${apiKey}`)
    let data = await reponse.json()
    console.log(data)

    document.querySelector('.City').innerHTML = data.name
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c'
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%'
    document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h'

    if (data.weather[0].main === 'Clouds') {
        weatherIcon.src = 'images/cloudy_164806.png'
    }else if (data.weather[0].main === 'Clear') {
        weatherIcon.src = 'images/sun_3104611.png'
    }else if (data.weather[0].main === 'Drizzle') {
        weatherIcon.src = 'images/drizzle.png'
    }else if (data.weather[0].main === 'Rain') {
        weatherIcon.src = 'images/rain.png'
    }else if (data.weather[0].main === 'Mist') {
        weatherIcon.src = 'images/mist_13882572.png'
    }
}

searchBtn.addEventListener('click', () =>{
    checkWeather(searchBox.value)
})


// checkWeather()