import { Request, Response } from "express";


export const index = async(req: Request, res: Response) => {
    console.log('index...')

    try {
        const fecha = new Date()
        const logo_url: string = process.env.BASE_URL + "images/dragados_logo.png"

        const data = {
            base_url: process.env.BASE_URL,
            logo_url,
            fecha
        };

        res.render("index", data);
    } catch (error) {
        console.log(error);
        res.status(500).json('Hubo un error')
    }
}