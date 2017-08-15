var orm = require("../config/orm.js");

var planner = {
  all: function(cb) {
    orm.all("planner", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("planner", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("planner", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

module.exports = planner;