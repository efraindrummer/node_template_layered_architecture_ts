
import { CAP_CURSO } from '../../models/cap_curso.js';
import db from '../../config/database.js';
import sequelize from 'sequelize';
import { ICapCurso } from '../../models/cap_curso.interface.js';


export class trainingService { 

    static async getAllCursos(): Promise<ICapCurso[]> {
        try {
            const cap_curso = await CAP_CURSO.findAll();
            return cap_curso;
        } catch (error) {
            console.log(error);
            throw new Error('Error al obtener cursos');
        }
    }

    static async getAllCourseStatusC(): Promise<ICapCurso[]> {
        try {
            const course_status_c = await CAP_CURSO.findAll({ where: { STATUS: 'C' }})
            return course_status_c;
        } catch (error) {
            console.error('Error in getAllCourseStatusC:', error);
            throw new Error('Error al obtener cursos con estatus C');
        }
    }

    static async callStore_SP_VERIFICA_PROYECTO_CONTRATO(): Promise<any[]> {
        console.log('callStore_SP_VERIFICA_PROYECTO_CONTRATO.....')
        try {
            const result = await db.query('EXEC SP_VERIFICA_PROYECTO_CONTRATO :param1', {
                replacements: { param1: '706223' },
                type: sequelize.QueryTypes.RAW,
            });

            return result;
        } catch (error) {
            console.error('Error in callStore_SP_VERIFICA_PROYECTO_CONTRATO:', error);
            throw new Error('Error al ejecutar SP_VERIFICA_PROYECTO_CONTRATO');
        }
    }
}