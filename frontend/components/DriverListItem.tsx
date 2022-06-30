import {FormulaDriver} from "../types/FormulaDriver";
import React from "react";
import {Avatar, ListItem, ListItemAvatar, ListItemText} from "@mui/material";

interface IProps {
    driver: FormulaDriver
}

export const DriverListItem:React.FC<IProps> = ({driver}) => {

    const assetUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/assets`

    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar alt={`${driver.firstname} ${driver.lastname}`}
                        src={`${assetUrl}/${driver.code.toLowerCase()}.png`}/>
            </ListItemAvatar>
            <ListItemText primary={`${driver.firstname} ${driver.lastname}`}
                          secondary={`${driver.team} ${driver.country}`} />
        </ListItem>
    )
}