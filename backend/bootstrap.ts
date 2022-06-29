import fs from 'fs';
import {FormulaDriver} from "./types/formulaDriver";

export class Bootstrap {
    private static driveData:FormulaDriver[] = [];

    public static getDrivers(): FormulaDriver[] {
        return this.driveData;
    }

    public static bootstrapDriverData():void {
        let rawDriverInfo = fs.readFileSync('./assets/drivers.json');
        this.driveData = JSON.parse(rawDriverInfo.toString());
    }
}






