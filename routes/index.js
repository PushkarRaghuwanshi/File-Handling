var express = require('express');
var router = express.Router();
var fs = require('fs');
const { sensitiveHeaders } = require('http2');
var path = require('path');

let globalpath = path.join(__dirname,'../','/public', '/uploads');

/* GET home page. */
router.get('/', function(req, res, next) {
  const files = fs.readdirSync(globalpath);
  res.render('index', {files: files});
});

router.get('/:filename', function(req, res, next) {
  const files = fs.readdirSync(globalpath);
  res.render('index', {files: files});
});

router.post('/createfile', (req, res)=>{

  // const filename = req.body.filename;
  const {filename} = req.body; //destructure ye hota h
  fs.writeFileSync(path.join(globalpath,filename),"")

  res.redirect(`${filename}`);
})

module.exports = router;
