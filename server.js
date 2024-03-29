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

app.get("/api/data-app", (req, res) => {
  fs.readFile(CATEGORY_APP_JSON, (err, data) => {
    if (err) {
      return res.status(500).send({
        error: "Error reading the file",
      });
    }

    const parsedData = JSON.parse(data);
    const page = req.query.page || 1;
    const limit = req.query.limit || 12;
    const search = req.query.search || "";
    const category = req.query.category || "All";

    const filteredData = parsedData
      .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
      .filter((item) => {
        if (category === "All") {
          return !item.category.includes("Game");
        } else {
          const categoryItem = item.category;
          for (const i of categoryItem) {
            if (i === category) {
              return item;
            }
          }
        }
      })
      .sort((a, b) => b._id - a._id);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const totalData = filteredData.length;
    const paginatedData = filteredData.slice(startIndex, endIndex);

    return res.send({
      page: page,
      totalData: totalData,
      data: paginatedData,
    });
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
    if (req.params.category === "All") {
      // sorting desc
      const dataParse = JSON.parse(data);
      dataParse.sort(function (a, b) {
        return b._id - a._id;
      });
      res.json(dataParse);

      // past
      // res.json(JSON.parse(data));
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

app.use(express.static("public"));

app.set("port", process.env.PORT || 5000);

app.listen(app.get("port"), function () {
  console.log("Node app is running on port", app.get("port"));
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
