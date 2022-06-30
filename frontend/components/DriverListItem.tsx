import {FormulaDriver} from "../types/FormulaDriver";
import React from "react";
import {Avatar, Divider, IconButton, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import {ArrowUpward, EmojiEvents} from "@mui/icons-material";
import {PositionLabel} from "./PositionLabel";
import {useMutation, useQueryClient} from "react-query";
import {overtake} from "../utilities/networking";

interface IProps {
    driver: FormulaDriver
    index: number
}

export const DriverListItem: React.FC<IProps> = ({driver, index}) => {

    const assetUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/assets`

    const queryClient = useQueryClient()
    const overtakeMutation = useMutation(overtake, {
        onSuccess: (data) => {
            queryClient.setQueryData('formulaDrivers', data)
        }
    })

    return (
        <React.Fragment>
            <ListItem
                secondaryAction={index > 0 ?
                    <IconButton color={'primary'}
                                edge="end"
                                aria-label="overtake"
                                onClick={() => {
                                    overtakeMutation.mutate(driver.id)
                                }
                                }>
                        <ArrowUpward/>
                    </IconButton> : <EmojiEvents sx={{fill: '#d2b419'}}/>}
            >
                <ListItemAvatar>
                    <Avatar alt={`${driver.firstname} ${driver.lastname}`}
                            src={`${assetUrl}/${driver.code.toLowerCase()}.png`}/>
                </ListItemAvatar>
                <PositionLabel position={index + 1} driverCode={driver.code}/>
                <ListItemText primary={`${driver.firstname} ${driver.lastname}`}
                              secondary={`${driver.team} ${driver.country}`}/>
            </ListItem>
            <Divider variant="inset" component="li"/>
        </React.Fragment>
    )
}