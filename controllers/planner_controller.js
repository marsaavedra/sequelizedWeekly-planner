var express = require("express");

var router = express.Router();

// Import the model (planner.js) to use its database functions.
var planner = require("../models/planner.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  planner.all(function(data) {
    var hbsObject = {
      planner: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});



router.post("/", function(req, res) {
    console.log ("its running");
  planner.create([
    "task_name", "done"
  ], [
    req.body.task_name, req.body.done
  ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  planner.update({
    done: req.body.done
  }, condition, function() {
    res.redirect("/");
  });
});


// Export routes for server.js to use.
module.exports = router;