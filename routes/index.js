var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ title: 'Life m8' });
});

router.get('/exercicis/', function(req, res, next) { 

  // the URL query comes in the shape of a string with each chord/scale/interval separated by a comma,
  // but we want a string with each chord/scale/interval between "" and separated by a comma,
  // so I grab the string, SPLIT it into an array, MAP through the array to give "" to each chord/scale/interval,
  // then join it back with "chord/scale/interval1","chord/scale/interval2" sintax that mysql can read ^^
  db(`SELECT * FROM exercicis`)
  .then(results => {
    res.send(results.data);
  })
   .catch(err => res.status(500).send(err));
});

module.exports = router;
