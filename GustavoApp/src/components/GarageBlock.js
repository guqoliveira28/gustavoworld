import React from 'react';
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import Style from './Components.module.scss'

function GarageBlock(props) {
   const { image, imageAlt, link, title } = props;
   return (
      <Box className={Style.garageblock} component={Link} to={link} >
         <Box component={'img'} src={image} alt={imageAlt} />
         <h1>{title}</h1>
      </Box>
   );
}

export default GarageBlock;