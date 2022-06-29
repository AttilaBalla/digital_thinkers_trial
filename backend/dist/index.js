"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const bootstrap_1 = require("./bootstrap");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
//const driversRoute = require('/routes/formulaDriverRoutes.ts');
// app.use('/drivers', driversRoute)
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
bootstrap_1.Bootstrap.bootstrapDriverData();
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
