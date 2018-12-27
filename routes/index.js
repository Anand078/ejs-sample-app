var express = require('express');
var router = express.Router();
var Product = require('../model/productDetails');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/check', function(req, res, next) {
    res.render('check');
  });

router.get('/getAllProducts', function(req, res, next) {
    Product.find({}, function(err,result){
      res.render('product', { title: 'Product Page' , products: result });
    });
 });
// router.get('/GetData', function(req, res, next){
//   let Details = [
//     {name : "Anand"},
//     {name : "Anand"},
//     {name : "Anand"},
//     {name : "Anand"},
//   ]
//   res.render('sample', {sampleData : Details})
// })

 
module.exports = router;
