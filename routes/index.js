const { isUtf8 } = require('buffer');
var express = require('express');
var router = express.Router();
var fs = require('fs');
const { sensitiveHeaders } = require('http2');
var path = require('path');

let globalpath = path.join(__dirname,'../','/public', '/uploads');

/* GET home page. */
router.get('/', function(req, res, next) {
  const files = fs.readdirSync(globalpath);
  res.render('index', {files: files, filedata: ""});
});

router.get('/:filename', function(req, res, next) {

  // uploads folder ke andar file ko read krne ke liye or right side me data dikhane ke liye upload folder ke andar ki files ka data is req.params.filename ki help se data dekh pa rahe h
  const filedata = fs.readFileSync(path.join(globalpath, req.params.filename), "utf-8");

  const files = fs.readdirSync(globalpath);
  res.render('index', {files: files, filedata : filedata});
});

router.post('/createfile', (req, res)=>{

  // const filename = req.body.filename;
  const {filename} = req.body; //destructure ye hota h
  fs.writeFileSync(path.join(globalpath,filename),"")

  res.redirect(`/${filename}`);
})

module.exports = router;
