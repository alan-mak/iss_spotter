const request = require('request-promise-native');
const { fetchCoordsByIP } = require('./iss');

const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json');
};

const fetchCoordsByIP = function(body) {
  let data = JSON.parse(body);
  let ip = data.ip;
  return request(`https://freegeoip.app/json/${ip}`)
};


module.exports = {fetchMyIP, fetchCoordsByIP}, ;