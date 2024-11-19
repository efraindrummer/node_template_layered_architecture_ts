import { DataTypes } from 'sequelize';
import db from '../config/database.js';

export const User = db.define('user', {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_name: {
      type: DataTypes.STRING,
    },
    user_password: {
      type: DataTypes.STRING,
    },
    user_email: {
      type: DataTypes.STRING,
    },
    user_entity: {
      type: DataTypes.STRING,
    },
    user_names: {
      type: DataTypes.STRING,
    },
    user_last_name_p: {
      type: DataTypes.STRING,
    },
    user_last_name_m: {
      type: DataTypes.STRING,
    },
    user_image: {
      type: DataTypes.STRING,
    },
    area_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'area',
        key: 'area_id',
      },
    },
    user_created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: () => new Date(),  // Usa la función de fecha de JavaScript
      },
      user_modified_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: () => new Date(),  // Usa la función de fecha de JavaScript
      },
    user_group_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user_group',
        key: 'user_group_id',
      },
    },
    user_active_session: {
      type: DataTypes.INTEGER,
    },
    user_allowed_session: {
      type: DataTypes.INTEGER,
    },
    user_status: {
      type: DataTypes.INTEGER,
    },
},{
    freezeTableName: true, // Evita que Sequelize pluralice el nombre de la tabla
    timestamps: false, // Si prefieres usar tus propios campos de fecha, desactívalos
});
