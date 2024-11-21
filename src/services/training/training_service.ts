
import { CAP_CURSO } from '../../models/cap_curso.js';
import db from '../../config/database.js';
import sequelize from 'sequelize';


export class trainingService { 

    static async getAllCursos() {
        try {
            const cap_curso = await CAP_CURSO.findAll();
            return cap_curso;
        } catch (error) {
            console.log(error)
        }
    }

    static async getAllCourseStatusC(){
        try {
            const course_status_c = await CAP_CURSO.findAll({ where: { STATUS: 'C' }})
            return course_status_c;
        } catch (error) {
            console.log(error)
        }
    }

    static async callStore_SP_VERIFICA_PROYECTO_CONTRATO (){
        console.log('callStore_SP_VERIFICA_PROYECTO_CONTRATO.....')
        try {
            const result = await db.query('EXEC SP_VERIFICA_PROYECTO_CONTRATO :param1', {
                replacements: { param1: '706223' },
                type: sequelize.QueryTypes.RAW,
            });

            return result;
        } catch (error) {
            console.log(error)
        }
    }
}