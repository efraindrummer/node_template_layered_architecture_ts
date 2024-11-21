import { DataTypes } from 'sequelize';
import db from '../config/database.js';


export const CAP_CURSO = db.define('CAP_CURSO', {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    DNF: {
        type: DataTypes.STRING,
    },
    CURSO: {
        type: DataTypes.STRING,
    },
    EMPRESA: {
        type: DataTypes.STRING,
    },
    ID_PROVEEDOR: {
        type: DataTypes.INTEGER,
    },
    ID_CAPACITADOR_INT: {
        type: DataTypes.STRING,
    },
    FECHAINI: {
        type: DataTypes.DATE,
    },
    FECHAFIN: {
        type: DataTypes.DATE,
    },
    HORARIOINI: {
        type: DataTypes.DATE,
    },
    HORARIOFIN: {
        type: DataTypes.DATE,
    },
    HORAS: {
        type: DataTypes.FLOAT,
    },
    LUGAR: {
        type: DataTypes.STRING,
    },
    ID_SUCURSAL: {
        type: DataTypes.INTEGER,
    },
    ID_SALA: {
        type: DataTypes.INTEGER,
    },
    OTRO_LUGAR: {
        type: DataTypes.STRING,
    },
    FACTURACOSTO: {
        type: DataTypes.STRING,
    },
    FACTURAINSUMOS: {
        type: DataTypes.STRING,
    },
    STATUS: {
        type: DataTypes.STRING,
    },
    INSTRUCTOR: {
        type: DataTypes.INTEGER,
    },
    INSUMOS: {
        type: DataTypes.DECIMAL,
    },
    COSTO: {
        type: DataTypes.DECIMAL,
    },
    YEAR: {
        type: DataTypes.INTEGER,
    },
    ID_CURSO: {
        type: DataTypes.INTEGER,
    },
    INSTRUCTOR_EXTERNO: {
        type: DataTypes.STRING,
    },
    CERTIFICACION: {
        type: DataTypes.STRING,
    },
    CERTVIGENCIA: {
        type: DataTypes.DATE,
    },
    CERTVIGENCIAFIN: {
        type: DataTypes.DATE,
    },
    NUMCERTIFICACION: {
        type: DataTypes.STRING,
    },
    TIPO_CURSO: {
        type: DataTypes.STRING,
    },
    COMENTARIOS: {
        type: DataTypes.STRING,
    },
    TEMATICA: {
        type: DataTypes.STRING,
    },
}, {
    freezeTableName: true,
})