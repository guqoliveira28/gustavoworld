import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from "@mui/material";
import Style from './Components.module.scss'

function BackArrow({ clickEvent }) {
    const navigate = useNavigate();

    if (!clickEvent) {
        clickEvent = () => navigate(-1);
    }

    return (
        <Box className={Style.backarrow} onClick={clickEvent} >
            <i className="fa-solid fa-angle-left"></i>
        </Box>
    );
}

export default BackArrow;