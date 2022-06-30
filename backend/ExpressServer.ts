import express from 'express';
import { Express } from 'express'
import {Server} from "http";
import {FormulaDriverRoutes} from "./routes/FormulaDriverRoutes"
import {InMemoryDriverService} from "./services/InMemoryDriverService";

export class ExpressServer {

    private server?: Express
    private httpServer?: Server

    constructor(private formulaDriverRoutes: FormulaDriverRoutes) {}

    public setup(port: number) {
        const server = express()

        InMemoryDriverService.bootstrapDriverData()
        this.configureStaticAssets(server)
        this.allowCrossOriginRequests(server)
        this.configureEndpoints(server)

        this.httpServer = this.listen(server, port)
        this.server = server
        return this.server
    }

    public listen(server: Express, port: number) {
        console.info(`Starting server on port ${port}`)
        return server.listen(port)
    }

    private configureStaticAssets(server: Express) {
        server.use('/assets', express.static('assets/img/'))
    }

    private allowCrossOriginRequests(server: Express) {
        server.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        })
    }

    private configureEndpoints(server: Express) {
        server.get("/api/drivers", this.formulaDriverRoutes.getAllDrivers)
        server.post("/api/drivers/:driverId/overtake", this.formulaDriverRoutes.overtakeDriver)
    }


}