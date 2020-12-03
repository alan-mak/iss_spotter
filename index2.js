let { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss_promised');

fetchMyIP()
  .then(fetchCoordsByIP)
  // .then(fetchISSFlyOverTimes)
  .then(body => console.log(body))




// .catch(e => {
    // console.log('Something went wrong')
    // throw new Error(e);
  // })