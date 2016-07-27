var axios = require('axios');

const WEATHER_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=08e3ad0437282f0abefa56ee74ab56af&units=metric';
module.exports = {
    getTemp: function(city) {
        var encodedCity = encodeURIComponent(city),
            url = `${WEATHER_URL}&q=${encodedCity}`;

        return axios.get(url).then(function(res) {
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            }else{
                return res.data.main.temp;
            }
        }, function(err) {
            throw new Error(err.data.message);
        })
    }
}
