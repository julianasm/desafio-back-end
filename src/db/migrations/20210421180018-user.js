'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('users', {
      id: {
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      }, 
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dateOfBirth:{
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      UF: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    },
    {
      timestamps: false
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
