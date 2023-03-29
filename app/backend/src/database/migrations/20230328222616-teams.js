'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('teams', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      teamName: {
        underscored: true,
        field: 'team_name',
        allowNull: false,
        type: Sequelize.STRING,
      }, 
    }
    );
  },
  
  down: async (queryInterface) => {
    await queryInterface.dropTable('teams');
  },
};