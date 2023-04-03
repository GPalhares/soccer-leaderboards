import { Model, DataTypes } from 'sequelize';
import db from '.';
import Teams from './teamsModel';

class Matches extends Model {
  declare id: number;
  declare homeTeamId: number;
  declare awayTeamId: number;
  declare homeTeamGoals: number;
  declare awayTeamGoals: number;
  declare inProgress: boolean;
}

Matches.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    homeTeamId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: { model: 'teams', key: 'id' },
    },
    homeTeamGoals: { allowNull: false, type: DataTypes.INTEGER },
    awayTeamId: {
      allowNull: false,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      type: DataTypes.INTEGER,
      references: { model: 'teams', key: 'id' },
    },
    awayTeamGoals: { allowNull: false, type: DataTypes.INTEGER },
    inProgress: { allowNull: false, type: DataTypes.BOOLEAN },
  },
  {
    sequelize: db,
    underscored: true,
    modelName: 'matches',
    timestamps: false,
  },
);

Teams.hasMany(Matches, { foreignKey: 'id', as: 'homeMatches' });
Teams.hasMany(Matches, { foreignKey: 'id', as: 'awayMatches' });

Matches.belongsTo(Teams, { foreignKey: 'homeTeamId', as: 'homeTeam' });
Matches.belongsTo(Teams, { foreignKey: 'awayTeamId', as: 'awayTeam' });

export default Matches;
