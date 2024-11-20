import {} from "dotenv";
import { Request, Response } from 'express';

import moment from "moment";

export class trainingController {

    static panel_module = async(req: Request, res: Response) => {
        console.log('panel_module...')

        try {
            const data = {
                base_url: process.env.BASE_URL,
                title: 'inicio'
            }

            res.render('training/panel', data)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Hubo un error'});
        }
    }
    
    static showTraining = async(req: Request, res: Response) => {
        console.log('showTraining...')

        try {
            
            const data = {
                base_url: process.env.BASE_URL,
                title: 'inicio'
            }

            console.log(JSON.stringify(data))

            res.render('training/show_training', data)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Hubo un error'});
        }
    }

    static new_dnf = async(req: Request, res: Response) => {
        console.log('new_dnf...')

        try {
            
            const data = {
                base_url: process.env.BASE_URL,
                title: 'Nueva DNF',
                fechaHoy: moment().format('YYYY-MM-DD')
            }

            res.render('training/nueva_dnf', data)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Hubo un error'});
        }
    }

    static show_training = async(req: Request, res: Response) => {
        console.log('show_training....')

        try {
            const data = {
                base_url: process.env.BASE_URL,
                title: 'Nueva DNF',
            }

            res.render('training/ver_solicitud', data)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Hubo un error'});
        }
    }
}