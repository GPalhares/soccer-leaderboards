import { Model, DataTypes } from 'sequelize';
import db from '.';

class Team extends Model {
  declare id: number;
  declare teamName: string;
}

Team.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    teamName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    modelName: 'TeamModel',
    underscored: true,
    tableName: 'teams',
    sequelize: db,
  },
);

export default Team;
