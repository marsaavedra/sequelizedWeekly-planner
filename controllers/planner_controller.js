var express = require("express");

var router = express.Router();

// Import the model (planner.js) to use its database functions.
//var planner = require("../models/planner.js");


// Requiring our models for syncing
var db = require("../models");



// Create all our routes and set up logic within those routes where required.
console.log("db test: ", db.Planners);
router.get("/", function(req, res) {
  db.Planners.findAll({
      //include:[{model: db.done}]
  }).then(function(data) {
    var hbsObject = {
      Planners: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});



//router.put("/:id", function(req, res) {
//  var condition = "id = " + req.params.id;
//
//  console.log("condition", condition);
//
//  db.Planners.update({
//    done: req.body.done
//  }, condition, function() {
//    res.redirect("/");
//  });
//});

router.put('/:id',(req, res)=> {
    db.Planners.update({ done: req.body.done }, {
        fields: ['done'],
        where: { id: req.params.id }
    }).then(data => {
        res.redirect('/')
    });
});




router.post("/", function (req, res) {
  db.Planners.create({
    task_name: req.body.task_name,
    done: req.body.done
  }).then(function (results) {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;