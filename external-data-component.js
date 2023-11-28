document.getElementById('cargarClima').addEventListener('click', function() {
    fetch('https://pro.openweathermap.org/data/2.5/forecast/climate?lat=35&lon=139&appid={1db803ccb1abf99ec8a58c88dcaec5e6}')
    .then(response => response.json())
    .then(data => {
        let temperaturaCelsius = data.main.temp - 273.15; // Conversión de Kelvin a Celsius
        document.getElementById('resultado').innerHTML = `
            <p>Temperatura: ${temperaturaCelsius.toFixed(2)}°C</p>
            <p>Humedad: ${data.main.humidity}%</p>
        `;
    })
    .catch(error => console.error('Error:', error));
});
