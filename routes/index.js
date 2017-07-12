// this file will handle any traffic to the site

// grab express
const express = require('express');
// get the Router() method from express
const router = express.Router();

// callback function runs whenever someone hits the / url
// request object full of the info coming in
// response object full of methods for sending data back to user
// never send data more than once using using because headers will already be sent
router.get('/', (req, res) => {
  res.send('Hey! It works!');

  // can send an object as JSON
  // const person = {
  //   name: 'Bob',
  //   age: 33
  // }
  // res.json();

  // can grab data from a URL using req.query.<name of parameter> and then send it back to the browser
  // res.send(req.query.name);
});

// req.params will access things in the URL
// here we grab the name parameter from the URL then reverse it and send it back the browser
router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join('');
  res.send(reverse);
});

module.exports = router;
