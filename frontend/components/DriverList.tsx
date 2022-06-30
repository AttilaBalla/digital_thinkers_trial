import React from "react";
import {List} from "@mui/material";
import {FormulaDriver} from "../types/FormulaDriver";
import {DriverListItem} from "./DriverListItem";

interface IProps {
    formulaDrivers: FormulaDriver[]
}

export const DriverList:React.FC<IProps> = ({formulaDrivers}) => {
    return (
        <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
            {formulaDrivers.map((driver, key) => {
                return <DriverListItem driver={driver} key={key}/>
            })}
        </List>
    )
}