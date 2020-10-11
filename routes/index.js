var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/documentation', (req, res) => {
  res.render('documentation');
});

router.get('/faq', (req, res) => {
  res.render('faq');
});

router.get('/login', (req, res) => {
  res.send('login');
});

router.get('/signup', (req, res) => {
  res.send('signup');
});


module.exports = router;