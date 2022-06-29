import {FormulaDriver} from "../types/formulaDriver"
import fs from "fs"
import {swapArrayElements} from "../utilites/helpers";

export class InMemoryDriverService {
    private static driversData:FormulaDriver[] = []

    public static getDrivers(): FormulaDriver[] {
        return this.driversData
    }

    public static overtakeDriver(driverId: number) {
        console.log(`overtaking, driver ID: ${driverId}`)
        let drivers = this.driversData
        // we don't care about the driver who is first, he can't overtake anyone =)
        for (let i = 1 ; i < drivers.length; i++) {
            if (drivers[i].id === driverId) {
                swapArrayElements(drivers, i - 1, i)
                this.assignPositions()
            }
        }
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
            swapArrayElements(drivers, i, j)
        }
    }

    private static assignPositions() {
        this.driversData = this.driversData.map((driver, index) => {
            driver.place = index + 1
            return driver
        })
    }
}