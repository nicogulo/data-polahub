var express = require("express");
var app = express();
var cors = require("cors");
var path = require("path");
var fs = require("fs");
const port = 3000;
var CATEGORY_JSON = path.join(__dirname, "data/category.json");
var CATEGORY_APP_JSON = path.join(__dirname, "data/categories-app.json");

app.use(cors());

app.get("/", function (req, res, next) {
  res.sendfile("public/index.html");
});

app.get("/api/data", function (req, res, next) {
  fs.readFile(CATEGORY_JSON, function (err, data) {
    if (err) process.exit(1);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json(JSON.parse(data));
  });
});

app.get("/api/data-app", function (req, res, next) {
  fs.readFile(CATEGORY_APP_JSON, function (err, data) {
    if (err) process.exit(1);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json(JSON.parse(data));
  });
});

// end point for detail of category
app.get("/api/data-app/:_id", function (req, res, next) {
  fs.readFile(CATEGORY_APP_JSON, function (err, data) {
    if (err) process.exit(1);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json(
      JSON.parse(data).filter(function (item) {
        return item._id === req.params._id;
      })
    );
  });
});

// end point for CATEGORY_APP_JSON filter by category
app.get("/api/data-app/filter/:category", function (req, res, next) {
  fs.readFile(CATEGORY_APP_JSON, function (err, data) {
    if (err) process.exit(1);
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (req.params.category === "All Categories") {
      res.json(JSON.parse(data));
    } else {
      res.json(
        JSON.parse(data).filter(function (item) {
          const category = item.category;
          for (const i of category) {
            if (i === req.params.category) {
              return item;
            }
          }
        })   
      );
    }
  });
});

// app.get("/api/data-app/:_id", function (req, res, next) {
//   fs.readFile(CHARACTERS_JSON, function (err, data) {
//     if (err) process.exit(1);
//     json = JSON.parse(data);
//     data_app = [];
//     for (character of json) {
//       if (character.house.toLowerCase() == req.params.house.toLowerCase()) {
//         data_app.push(character);
//       }
//     }
//     console.log(data_app);
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.json(data_app);
//   });
// });

// app.get('/api/characters/students', function(req, res, next){
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

// app.get('/api/characters/staff', function(req, res, next){
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

app.use(express.static("public"));

app.set("port", process.env.PORT || 5000);

app.listen(app.get("port"), function () {
  console.log("Node app is running on port", app.get("port"));
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
