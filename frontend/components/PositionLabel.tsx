import React from "react";
import {Typography} from "@mui/material";

interface IProps {
    position: number
}

export const PositionLabel:React.FC<IProps> = ({position}) => {

    let suffix;
    switch(position) {
        case 1: suffix = 'st'
            break
        case 2: suffix = 'nd'
            break
        case 3: suffix = 'rd'
            break
        default: suffix = 'th'
    }

    return (
        <Typography variant={'h5'} marginRight={'1rem'}>{`${position}${suffix}`}</Typography>
    )
}