import React from 'react';
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import Style from './Components.module.scss'

export default function SelectionBlock({ image, imageAlt, link, title, ...props }) {
   return (
      <Box className={Style.selectionblock} component={Link} to={link} {...props} >
         <Box component={'img'} src={image} alt={imageAlt} />
         <h1>{title}</h1>
      </Box>
   );
}
