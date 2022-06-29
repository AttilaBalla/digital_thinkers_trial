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

        InMemoryDriverService.bootstrapDriverData();
        this.configureEndpoints(server)

        this.httpServer = this.listen(server, port)
        this.server = server
        return this.server
    }

    public listen(server: Express, port: number) {
        console.info(`Starting server on port ${port}`)
        return server.listen(port)
    }

    private configureEndpoints(server: Express) {
        server.get("/drivers", this.formulaDriverRoutes.getAllDrivers)
    }


}