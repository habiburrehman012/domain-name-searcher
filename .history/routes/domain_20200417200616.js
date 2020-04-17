var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('../config');
const domain = config.domain_name;
const authHeader = config.auth_header;


router.get('/search', function(req, res, next) {
  request.get(`${domain}/v1/domains/available?domain=${req.query.domain}`,{'headers':authHeader},(error,response,body)=>{
    if(error)
        console.log(error);
    res.json({status:200,data:body})
  })
});

router.get('/suggested', function(req, res, next) {
    request.get(`${domain}/v1/domains/suggest?query=${req.query.domain}&limit=${req.query.limit}`,{'headers':authHeader},(error,response,body)=>{
      if(error)
          console.log(error);
      // res.json({status:200,data:body})
      console.log("body=",isArray(body));
      let array = [];
      // body.map(obj=>array.push(obj.domain));
      console.log("array=>",array);
      // router.post(`${domain}/v1/domains/available?checkType=FAST`,)
    })
  });



module.exports = router;
