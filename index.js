document.addEventListener('DOMContentLoaded',function() {
     const apiKey = '508695434f7e0ca8c23dfb2092ffe3dc'
     const city = 'Küssnacht am Rigi'
     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;


     fetch(url)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            const weather = data.weather[0].description;

            document.getElementById('temp').innerText = temperature + '°C'
            document.getElementById('prognose').innerText = weather;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });

    function updateTime() {
        const now = new Date()
        document.getElementById('time').innerText = now;

    }

    updateTime()
    setInterval(updateTime, 1000)

})