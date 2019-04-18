var express = require('express');
var path = require('path');
const crypto = require('crypto');

//----------------- SQL Server -----------------------
 var mysql      = require('mysql');
 var database = mysql.createConnection({
   host     : 'localhost',
   user     : 'root',
   password : '',
   database : 'nodemysql'
 });

 database.connect((err) => {
   if (err) {
     throw err;
   }

   console.log("Mysql is NOW connected");

});

// Authentication 
// const myModule = require('./authentication');

// ----------------- Application ----------------------------
var app = express();

const fs = require('fs');
const JavaScriptObfuscator = require('javascript-obfuscator');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Important, pass in port as in `npm run dev 1234`, do not change
//const portNum = process.argv[2];

// Send HTML at root, do not change
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/public/index.html'));
  });

// Send Style, do not change
app.get('/style.css',function(req,res){
  //Feel free to change the contents of style.css to prettify your Web app
  res.sendFile(path.join(__dirname+'/public/style.css'));
});

// Send obfuscated JS, do not change
app.get('/index.js',function(req,res){
  fs.readFile(path.join(__dirname+'/public/index.js'), 'utf8', function(err, contents) {
    const minimizedContents = JavaScriptObfuscator.obfuscate(contents, {compact: true, controlFlowFlattening: true});
    res.contentType('application/javascript');
    res.send(minimizedContents._obfuscatedCode);
  });
});

// Send obfuscated JS, do not change
app.get('/dashboard.js',function(req,res){
  fs.readFile(path.join(__dirname+'/public/dashboard.js'), 'utf8', function(err, contents) {
    const minimizedContents = JavaScriptObfuscator.obfuscate(contents, {compact: true, controlFlowFlattening: true});
    res.contentType('application/javascript');
    res.send(minimizedContents._obfuscatedCode);
  });
});

app.get('/dashboard',function(req,res){
  res.sendFile(path.join(__dirname+'/public/dashboard.html'));
});

// ************** Create DB **************
app.get('/create',function(req,res){
  let sql = 'CREATE DATABASE nodemysql';
  database.query(sql, (err, result) => {
    if (err) throw err;
    res.send("created");
  })
});

app.get('/image.png',function(req,res){
  res.sendFile(path.join(__dirname+'/public/image.png'));
});

// Create table
app.get('/create_user_id_table', (req, res) => {
  let sql = 'CREATE TABLE user_id_table(id int AUTO_INCREMENT, user_name VARCHAR(255), hash_code VARCHAR(255), PRIMARY KEY(id))';
  database.query(sql, (err, result) => {
      if(err) throw err;
      console.log(result);
      res.send('Posts table created...');
  });
});

// Adding A new course to the courses table
app.get('/add_course', (req, res) => {
  let sql = '';
  database.query(sql, (err, result) => {
      if(err) throw err;
      console.log(result);
      
  });
  res.json('Created course...');
});

app.get('/add_new_user', (req, res) => {
  const pwd = req.query.pwd;
  let salt = 'abc';

  hashPwd   = crypto.createHash('sha1')
  .update(pwd+salt)
  .digest('hex');

  let post = {user_name:'sam', salt: salt, hash_code: hashPwd};
  let sql = 'INSERT INTO user_id_table SET ?';
  database.query(sql, post, (err, result) => {
      if(err) throw err;
      console.log(result);
      res.json("User has been created...");
  });
});

/*
  Find the user and see if they entered the 
  correct password
*/
app.get('/verify_user', (req, res) => {
  const user_name = req.query.user_name;
  const pwd = req.query.pwd;
  let salt = 'abc';

  hashPwd   = crypto.createHash('sha1')
  .update(pwd+salt)
  .digest('hex');

  let sql = "select * from user_id_table where user_name = \'"
    + user_name + "\' and hash_code = \'" + hashPwd + "\';";

  database.query(sql, (err, result) => {
      if(err) throw err;
      console.log(result);
      res.json("user is being verified " + hashPwd);
  });
})

app.listen(8000);
console.log('Running app at localhost: ' + 8000);
