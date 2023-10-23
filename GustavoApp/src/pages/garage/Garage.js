import React from 'react';
import GarageBlock from "../../components/GarageBlock";
import { Box, Grid } from "@mui/material";
import { info } from "../../info/Info";
import Style from './Garage.module.scss'

export default function Garage() {
    return (
        <Box>
            <Grid container className={Style.garage}>
                {info.garage.map((section, index) => (
                    <Grid item xs={12} md={6} key={index}>
                        <GarageBlock image={section.image} imageAlt={section.imageAlt} link={section.link} title={section.title} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};