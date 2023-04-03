'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('matches', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      home_team_id: {
        // underscored: true,
        // field: 'home_team_id',
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model:'teams',
          key: 'id',
        },
      }, 
      away_team_id: {
        // underscored: true,
        // field: 'away_team_id',
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model:'teams',
          key: 'id',
        },
      }, 
      home_team_goals: {
        // underscored: true,
        // field: 'home_team_goals',
        allowNull: false,
        type: Sequelize.INTEGER,
      }, 
      away_team_goals: {
        // underscored: true,
        // field: 'away_team_goals',
        allowNull: false,
        type: Sequelize.INTEGER,
      }, 
      in_progress: {
        // underscored: true,
        // field: 'in_progress',
        allowNull: false,
        type: Sequelize.BOOLEAN,
      }, 
    },
    );
  },
  
  down: async (queryInterface) => {
    await queryInterface.dropTable('matches');
  },
};