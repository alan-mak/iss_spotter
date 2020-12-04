// let { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss_promised');
let {nextISSTimesForMyLocation} = require('./iss_promised');

nextISSTimesForMyLocation()
.then()
.catch(e => {
    console.log('Something went wrong')
    console.log(e.message);
  })