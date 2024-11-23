import { NextFunction, Request, Response } from "express";


export const session_validation = (req: Request, res: Response, next: NextFunction) => {
    if (!req.session || !req.session.loged) {
        res.redirect("/login");
    } else {
        next();
    }
};