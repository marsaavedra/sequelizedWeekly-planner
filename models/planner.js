module.exports = function(sequelize, DataTypes) {
  var Planners = sequelize.define("Planners", {
    task_name: DataTypes.STRING,
    done: DataTypes.BOOLEAN
  });
  return Planners;
    console.log("Planner: ", Planners);
};



