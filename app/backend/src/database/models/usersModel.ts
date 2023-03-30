import { Model, DataTypes } from 'sequelize';
import db from '.';

class Users extends Model {
  declare id: number;
  declare teamName: string;
}

Users.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    modelName: 'UsersModel',
    tableName: 'users',
    sequelize: db,
  },
);

export default Users;
