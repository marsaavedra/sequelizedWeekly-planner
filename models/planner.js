module.exports = function(sequelize, DataTypes) {
  var planner = sequelize.define("planner", {
    task_name: DataTypes.STRING,
    done: DataTypes.BOOLEAN
  });
  return planner;
    console.log("Planner: ", planner);
};



