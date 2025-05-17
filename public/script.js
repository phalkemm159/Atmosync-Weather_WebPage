const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');
const cityHide = document.querySelector('.city-hide');

search.addEventListener('click', () => {
  const APIkey = '66138d8d78e7c6aa03ec968d956bceab';
  const city = document.querySelector('.search-box input').value;

  if (city === '') {
    return;
  }

  fetch(`/weather?city=${city}`)
    .then(response => response.json())
    .then(json => {
      if (json.cod === '404') {
        cityHide.textContent = city;
        container.style.height = '400px'; // Fixed this line
        weatherBox.classList.remove('active');
        weatherDetails.classList.remove('active');
        error404.classList.add('active');
        return;
      }

      const image = document.getElementById('img');
      const temperature = document.getElementById("temp");
      const description = document.getElementById("descr");
      const humidity = document.getElementById('humi');
      const wind = document.getElementById("wind");

      if (cityHide.textContent === city) {
        return;
      } else {
        cityHide.textContent = city;

        container.style.height = '555px';
        container.classList.add('active');
        weatherBox.classList.add('active');
        weatherDetails.classList.add('active');
        error404.classList.remove('active');

        // Removed redundant container.classList.add('active')

        switch (json.weather[0].main) {
          case 'Clear':
            image.src = 'images/clear.png';
            break;
          case 'Rain':
            image.src = 'images/rain.png';
            break;
          case 'Snow':
            image.src = 'images/snow.png';
            break;
          case 'Mist':
            image.src = 'images/mist.png';
            break;
          case 'Haze':
            image.src = 'images/haze.png';
            break;
          default:
            image.src = 'images/cloud.png';
        }

        
        temperature.innerHTML = `${parseInt(json.main.temp)}<span> °C</span>`;
        description.innerHTML = json.weather[0].description;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${json.wind.speed} m/s`;


        const infoWeather = document.querySelector('.info-weather');
        const infoHumidity = document.querySelector('.info-humidity');
        const infoWind = document.querySelector('.info-wind');

        const elCloneInfoWeather = infoWeather.cloneNode(true);
        const elCloneInfoHumidity = infoHumidity.cloneNode(true);
        const elCloneInfoWind = infoWind.cloneNode(true);

        elCloneInfoWeather.id = 'clone-info-weather';
        elCloneInfoWeather.classList.add('active-clone');

        elCloneInfoHumidity.id = 'clone-info-humidity';
        elCloneInfoHumidity.classList.add('active-clone');

        elCloneInfoWind.id = 'clone-info-wind';
        elCloneInfoWind.classList.add('active-clone');

        setTimeout(() => {
          infoWeather.insertAdjacentElement('afterend', elCloneInfoWeather);
          // infoHumidity.insertAdjacentElement('afterend', elCloneInfoHumidity);
          // infoWind.insertAdjacentElement('afterend', elCloneInfoWind);
        }, 2200);

        const cloneInfoWeather = document.querySelectorAll('.info-weather.active-clone');
        const totalCloneInfoWeather = cloneInfoWeather.length;
        const cloneInfoWeatherFirst = cloneInfoWeather[0];

        const cloneInfoHumidity = document.querySelectorAll('.info-humidity.active-clone');
        const cloneInfoHumidityFirst = cloneInfoHumidity[0];

        const cloneInfoWind = document.querySelectorAll('.info-wind.active-clone');
        const cloneInfoWindFirst = cloneInfoWind[0];

        if (totalCloneInfoWeather > 0) {
          cloneInfoWeatherFirst.classList.remove('active-clone');
          // Fixed the duplicate code - was removing the same class 3 times
          cloneInfoHumidityFirst.classList.remove('active-clone');
          cloneInfoWindFirst.classList.remove('active-clone');

          setTimeout(() => {
            cloneInfoWeatherFirst.remove();
            cloneInfoHumidityFirst.remove();
            cloneInfoWindFirst.remove();
          }, 2200);
        }
      }
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
    });
});

// Add 'Enter' key support for the search box
document.querySelector('.search-box input').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    search.click();
  }
});


