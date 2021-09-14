var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
const port = 3000;
var CATEGORY_JSON = path.join(__dirname, 'data/category.json');
var CATEGORY_APP_JSON = path.join(__dirname, 'data/categories-app.json');
var CATEGORY_APP = path.join(__dirname, 'data/categories-app.js');

app.get('/', function (req, res) {
  res.sendfile('public/index.html');
});

app.get('/api/data', function (req, res) {
  fs.readFile(CATEGORY_JSON, function (err, data) {
    if (err) process.exit(1);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(JSON.parse(data));
  });
});

app.get('/api/data-app', function (req, res) {
  fs.readFile(CATEGORY_APP_JSON, function (err, data) {
    if (err) process.exit(1);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(JSON.parse(data));
  });
});
app.get('/api/data-app-js', function (req, res) {
  fs.readFile(CATEGORY_APP, function (err, data) {
    if (err) process.exit(1);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(JSON.parse(data));
  });
});

// app.get('/api/characters/students', function(req, res){
//   fs.readFile(CHARACTERS_JSON, function(err, data){
//     if(err) process.exit(1);
//     json = JSON.parse(data);
//     students_array = [];
//     for(character of json){
//       if(character.hogwartsStudent == true){
//       students_array.push(character);
//       }
//     }
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.json(students_array);
//   })
// })

// app.get('/api/characters/staff', function(req, res){
//   fs.readFile(CHARACTERS_JSON, function(err, data){
//     if(err) process.exit(1);
//     json = JSON.parse(data);
//     staff_array = [];
//     for(character of json){
//       if(character.hogwartsStaff == true){
//       staff_array.push(character);
//       }
//     }
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.json(staff_array);
//   })
// })

// app.get('/api/characters/house/:house', function(req, res){
//   fs.readFile(CHARACTERS_JSON, function(err, data){
//     if(err) process.exit(1);
//     json = JSON.parse(data);
//     house_array = [];
//     for(character of json){
//       if(character.house.toLowerCase() == req.params.house.toLowerCase()){
//       house_array.push(character);
//       }
//     }
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.json(house_array);
//   })
// })

app.use(express.static('public'));

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
