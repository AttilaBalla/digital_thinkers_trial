import {FormulaDriver} from "../types/formulaDriver"
import fs from "fs"

export class InMemoryDriverService {
    private static driversData:FormulaDriver[] = []

    public static getDrivers(): FormulaDriver[] {
        return this.driversData
    }

    public static bootstrapDriverData() {
        let rawDriverInfo = fs.readFileSync('./assets/drivers.json')
        this.driversData = JSON.parse(rawDriverInfo.toString())
        this.shuffleDriversArray()
        this.assignPositions()
    }

    private static shuffleDriversArray() {
        let drivers = this.driversData
        for (let i = drivers.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1))
            let temp = drivers[i]
            drivers[i] = drivers[j]
            drivers[j] = temp
        }

    }

    private static assignPositions() {
        this.driversData = this.driversData.map((driver, index) => {
            driver.place = index + 1
            return driver
        })
    }


}