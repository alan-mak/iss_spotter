const request = require('request-promise-native');


const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json');
};

const fetchCoordsByIP = function(body) {
  let data = JSON.parse(body);
  let ip = data.ip;
  return request(`https://freegeoip.app/json/${ip}`)
};

const fetchISSFlyOverTimes = function(body) {
  let lat = JSON.parse(body).latitude;
  let long = JSON.parse(body).longitude;
  return request(`http://api.open-notify.org/iss-pass.json?lat=${lat}&lon=${long}`)
}

module.exports = {fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes};