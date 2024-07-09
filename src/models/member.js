const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");
module.exports = (sequelize, DataTypes) => {
  class Member extends Model {}

  Member.init(
    {
      fullName: DataTypes.STRING,
      birthday: DataTypes.DATE,
      memberCode: DataTypes.STRING,
      gender: DataTypes.STRING,
    },
    {
      // Other model options go here
      sequelize, // We need to pass the connection instance
      modelName: "Member", // We need to choose the model name
    }
  );
  return Member;
};
