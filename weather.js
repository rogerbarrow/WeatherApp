class Weather {
  constructor(city, state) {
    this.apiKey = 'x';
    this.city = city;
    this.state = state;

  }
//Fetch weather from API
async getWeather() {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}.json`);
 
  const responseData = await response.json();
  
  return responseData.coord;

}

//change weather location
changeLocaton(city, state) {
  this.city = city;
  this.state = state;
}

}


