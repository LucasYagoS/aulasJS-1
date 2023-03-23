const apiKey = 'kPyaqwH9sXALAcypn6Gy3MG2oDXi35zC'



buscarClima = async () => {
    try {
        const local = document.getElementById("txtLocal").value
        const urlLocal = `http://dataservice.accuweather.com/locations/v1/search?q=${local}&apikey=${apiKey}`
        const localAPI = await fetch(urlLocal)
        const dataLocal = await localAPI.json()
        const localKey = dataLocal[0].Key
        console.log(dataLocal)
        const urlWeather = `http://dataservice.accuweather.com/currentconditions/v1/${localKey}?apikey=${apiKey} `
        const weatherAPI = await fetch(urlWeather)
        const dataWeather = await weatherAPI.json()
        console.log(dataWeather)

        const cityName = document.getElementById("city")
        const weatherIcon = document.getElementById("weather-icon")
        const temperature = document.getElementById("temperature")
        const condition = document.getElementById("weather-condition")
        const date = document.getElementById("date")

        const city = dataLocal[0].LocalizedName
        const iconId = dataWeather[0].WeatherIcon
        const temp = dataWeather[0].Temperature.Metric.Value
        const weatherConditon = dataWeather[0].WeatherText
        const time = dataWeather[0].LocalObservationDateTime.split("T")[0]

        const iconUrl = `https://developer.accuweather.com/sites/default/files/${iconId < 10 ? "0" + iconId : iconId}-s.png`
        cityName.innerHTML = city
        weatherIcon.setAttribute("src", iconUrl)
        temperature.innerHTML = `${temp} ºC`
        condition.innerHTML = weatherConditon
        const newTime = new Date(time).toLocaleDateString('pt-BR')
        date.innerHTML = newTime


        const show = document.getElementById("weather-info")
        show.className = "box"
    } catch (error) {
        console.log(error)
    }
}