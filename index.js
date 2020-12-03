const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation} = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  // console.log('It worked! Returned IP:' , ip);
  
  fetchCoordsByIP(ip, (error, coord) => {
    if (error) {
      console.log("It didn't work!", error);
      return;
    }
    // console.log('It worked! Returned Coordinates:', coord);
    fetchISSFlyOverTimes(coord, (error, response) => {
      if (error) {
        console.log("It didn't work!", error);
        return;
      }
      // console.log('It worked! Returned fly times:', response);
      nextISSTimesForMyLocation(response, (error, final) => {
        if (error) {
          return console.log("It didn't work!", error);
        }
        // success, print out the deets!
        console.log(final);
      });
    });
  });
});


