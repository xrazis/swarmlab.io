var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/documentation', (req, res, next) => {
  res.render('documentation');
});

router.get('/faq', (req, res, next) => {
  res.render('faq');
});

module.exports = router;