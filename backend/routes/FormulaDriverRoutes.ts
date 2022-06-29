import { NextFunction, Request, Response } from 'express'
import {InMemoryDriverService} from "../services/InMemoryDriverService";

export class FormulaDriverRoutes {

    public getAllDrivers = async (req: Request, res: Response, next: NextFunction) => {
        try {
            res.json(InMemoryDriverService.getDrivers())
        } catch (err) {
            next(err)
        }
    }
}