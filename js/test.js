const fetch = require('node-fetch');

fetch('http://example.com/movies.json')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
  });
