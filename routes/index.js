const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // this will render the template file hello.pug
  // data can be passed to the template as an object
  // can additionally take in data from the URL using req.query
  res.render('hello', {
    // these are called local variables
    name: 'Bob',
    food: req.query.food,
    // this will pass the title to the layout file
    title: 'Some stuff here'
  });
});

router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join('');
  res.send(reverse);
});

module.exports = router;
