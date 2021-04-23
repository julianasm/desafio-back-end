const users = (Sequelize, DataTypes) => {
    const Users = Sequelize.define(
        "users",
        {
          id: {
            type:DataTypes.INTEGER,
            primaryKey: true,
          }, 
          name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          email: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          phone: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          dateOfBirth:{
            type: DataTypes.DATEONLY,
            allowNull: false,
          },
          UF: {
            type: DataTypes.STRING,
            allowNull: false,
          }
        },
        {
          timestamps: false
        }
    )
    return Users;
}

module.exports = users;