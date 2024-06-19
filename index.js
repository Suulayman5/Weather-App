const apiKey = '41258f6925adad10a38d6f7f4e85b072'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='

const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search Button')
async function checkWeather(city){
    const reponse = await fetch(apiUrl + city + `&appid=${apiKey}`)
    let data = await reponse.json()
    console.log(data)

    document.querySelector('.City').innerHTML = data.name
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c'
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%'
    document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h'
}

searchBtn.addEventListener('click', () =>{
    checkWeather(searchBox.value)
})


// checkWeather()