const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes} = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned IP:' , ip);
});

fetchCoordsByIP('70.51.134.101', (error, coord) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log('It worked! Returned Coordinates:', coord);
})

const ex = { latitude: 46.2596, longitude: -79.2789 }
fetchISSFlyOverTimes(ex, (error, response) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log('It worked! Returned fly times:', response);
});