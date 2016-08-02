var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=b5048b018f4c5f8f8aacd371d17ff75f&units=imperial';

module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${location}`;

    return axios.get(requestURL).then(function(res){
      // for success
      if (res.data.cod && res.data.message){
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    },function(res){
      // for error
      throw new Error(res.data.message);
    });
  }
}

// #{} everything inside this is executed as regular javascript expression
// axios uses promises
