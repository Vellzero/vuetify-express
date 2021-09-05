var express = require('express');
var router = express.Router();
var path = require('node:path')

/* GET home page. */
router.get('/', function(req, res, next) {

  res.sendfile(path.join(__dirname, '../public/index.html'));

  //res.render('index', { title: 'Express' });
});
router.get('/about*', function(req, res, next) {

  res.sendfile(path.join(__dirname, '../public/index.html'));

  //res.render('index', { title: 'Express' });
});
router.get('/todo*', function(req, res, next) {

  res.sendfile(path.join(__dirname, '../public/index.html'));

  //res.render('index', { title: 'Express' });
});
router.get('/dmap*', function(req, res, next) {

  res.sendfile(path.join(__dirname, '../public/index.html'));

  //res.render('index', { title: 'Express' });
});
router.get('/board*', function(req, res, next) {

  res.sendfile(path.join(__dirname, '../public/index.html'));

  //res.render('index', { title: 'Express' });
});
router.get('/note*', function(req, res, next) {

  res.sendfile(path.join(__dirname, '../public/index.html'));

  //res.render('index', { title: 'Express' });
});
router.get('/next*', function(req, res, next) {

  res.sendfile(path.join(__dirname, '../public/index.html'));

  //res.render('index', { title: 'Express' });
});
router.get('/login*', function(req, res, next) {

  res.sendfile(path.join(__dirname, '../public/index.html'));
  
  //res.render('index', { title: 'Express' });
});

var mysql = require('mysql');
// Connection 객체 생성 
var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',   
  password: 'skek93',
  database: 'test_crud'  
});  
// Connect
connection.connect(function (err) {   
  if (err) {     
    console.error('mysql connection error');     
    console.error(err);     
    throw err;   
  } 
});

router.post('/regist', function (req, res) {
  var user = {
    'userid': req.body.userid,
    'name': req.body.name,
    'address': req.body.address
  };
  var query = connection.query('insert into users set ?', user, function (err, result) {
    if (err) {
      console.error(err);
      throw err;
    }
    res.status(200).send('success');
  });
});

/* GET meetingrooms listing. */
router.get('/users', function(req, res, next) {
  // 쿼리 날려서 보내기
  
  connection.query('SELECT * from users', (error, rows, fields) => {
    if (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }

    console.log(': ', rows);
    res.send(rows);
  });
});

module.exports = router;
