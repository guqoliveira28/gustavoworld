import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from "@mui/material";
import Style from './Components.module.scss'

function BackArrow() {
    const navigate = useNavigate();
    return (
        <Box className={Style.backarrow} onClick={() => navigate(-1)} >
            <i className="fa-solid fa-angle-left"></i>
        </Box>
    );
}

export default BackArrow;