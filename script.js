function fetchData() {
  console.log("searching....")
  const cityname = document.getElementById("searchinp").value;
  console.log(cityname)
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${cityname}&country=india`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '72164fb0ffmshf93452a80fd6336p19d2ddjsna639c0b7fed5',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };

  return fetch(url, options)
    .then(response => {
      response.json()
        .then(data => {
          console.log(data);
          logResult(JSON.stringify(data));
        })
        .catch(error => {
          console.error('Error parsing JSON:', error);
        });
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
    });
}

function logResult(result) {
  console.log(result)
  const cityname = document.getElementById("searchinp").value;
  const response = JSON.parse(result);
  console.log(response);
 
  document.getElementById("cloud_pct").innerHTML = response.cloud_pct;
  document.getElementById("feels_like").innerHTML = response.feels_like;
  document.getElementById("humidity").innerHTML = response.humidity;
  document.getElementById("max_temp").innerHTML = response.max_temp;
  document.getElementById("min_temp").innerHTML = response.min_temp;
  
  document.getElementById("temp").innerHTML = response.temp;
 
  document.getElementById("city").innerHTML = `WEATHER FOR ${cityname.toUpperCase()}`;
}