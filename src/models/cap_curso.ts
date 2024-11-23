import { DataTypes, Model, Optional } from 'sequelize';
import db from '../config/database.js';
import { ICapCurso } from './cap_curso.interface.js';

// Define los atributos opcionales para la creación del modelo
type ICapCursoCreationAttributes = Optional<ICapCurso, 'ID'>;

// Extiende el modelo de Sequelize
export class CAP_CURSO extends Model<ICapCurso, ICapCursoCreationAttributes> implements ICapCurso {
    public ID!: number;
    public DNF?: string;
    public CURSO?: string;
    public EMPRESA?: string;
    public ID_PROVEEDOR?: number;
    public ID_CAPACITADOR_INT?: string;
    public FECHAINI?: Date;
    public FECHAFIN?: Date;
    public HORARIOINI?: Date;
    public HORARIOFIN?: Date;
    public HORAS?: number;
    public LUGAR?: string;
    public ID_SUCURSAL?: number;
    public ID_SALA?: number;
    public OTRO_LUGAR?: string;
    public FACTURACOSTO?: string;
    public FACTURAINSUMOS?: string;
    public STATUS?: string;
    public INSTRUCTOR?: number;
    public INSUMOS?: number;
    public COSTO?: number;
    public YEAR?: number;
    public ID_CURSO?: number;
    public INSTRUCTOR_EXTERNO?: string;
    public CERTIFICACION?: string;
    public CERTVIGENCIA?: Date;
    public CERTVIGENCIAFIN?: Date;
    public NUMCERTIFICACION?: string;
    public TIPO_CURSO?: string;
    public COMENTARIOS?: string;
    public TEMATICA?: string;

    // Timestamps (si están habilitados)
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

// Definir el modelo
CAP_CURSO.init(
    {
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
    },
    {
        sequelize: db,
        tableName: 'CAP_CURSO',
        freezeTableName: true,
    }
);

export default CAP_CURSO;
