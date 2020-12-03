let { fetchMyIP } = require('./iss_promised');

fetchMyIP().then((body) =>
  body)



// .catch(e => {
    // console.log('Something went wrong')
    // throw new Error(e);
  // })