import dotenv from 'dotenv';
import {ExpressServer} from "./ExpressServer";
import {FormulaDriverRoutes} from "./routes/FormulaDriverRoutes";

dotenv.config();

const port = process.env.port as any || 8000

export class Application {
    public static async createApplication() {
        const expressServer = new ExpressServer(new FormulaDriverRoutes())
        expressServer.setup(port)

        return expressServer
    }
}