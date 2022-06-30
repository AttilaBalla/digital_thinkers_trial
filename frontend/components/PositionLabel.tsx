import React from "react";
import {Typography} from "@mui/material";

interface IProps {
    position: number
    driverCode: string
}

export const PositionLabel: React.FC<IProps> = ({position, driverCode}) => {

    let suffix;
    switch (position) {
        case 1:
            suffix = 'st'
            break
        case 2:
            suffix = 'nd'
            break
        case 3:
            suffix = 'rd'
            break
        default:
            suffix = 'th'
    }

    return (
        <React.Fragment>
            <Typography variant={'h5'} marginRight={'.5rem'}>{`${position}${suffix}`}</Typography>
            <Typography variant={'h5'} marginRight={'1rem'}>{driverCode}</Typography>
        </React.Fragment>
    )
}