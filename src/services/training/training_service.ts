import { CAP_CURSO } from '../../models/cap_curso.js';


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
}