import React, {useEffect, useState} from "react";
import {NextPage} from "next";
import {Box, Typography} from "@mui/material";
import {useQuery} from "react-query";
import {getDrivers} from "../utilities/networking";
import {DriverList} from "../components/DriverList";

const Drivers: NextPage = () => {

    const formulaDrivers = useQuery('formulaDrivers', getDrivers);

    return (
        <Box>
            {formulaDrivers.data ? <DriverList formulaDrivers={formulaDrivers.data}/>
                : <Typography>Loading I guess</Typography>}
        </Box>
    )
}

export default Drivers