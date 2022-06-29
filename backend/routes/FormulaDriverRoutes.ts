import { NextFunction, Request, Response } from 'express'
import {InMemoryDriverService} from "../services/InMemoryDriverService";

interface OverTakeQueryParams {
    driverId: string
}

export class FormulaDriverRoutes {

    public getAllDrivers = async (req: Request, res: Response, next: NextFunction) => {
        try {
            res.json(InMemoryDriverService.getDrivers())
        } catch (err) {
            next(err)
        }
    }

    public overtakeDriver = async (req: Request<OverTakeQueryParams, unknown, unknown, unknown>, res: Response, next: NextFunction) => {

        try {
            InMemoryDriverService.overtakeDriver(parseInt(req.params.driverId))
            res.json(InMemoryDriverService.getDrivers())
        } catch (err) {
            next(err)
        }
    }
}