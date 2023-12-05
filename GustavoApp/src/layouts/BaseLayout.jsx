import React from "react";
import Style from "./BaseLayout.module.scss";
import Navbar from "./Navbar";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Garage from "../pages/garage/Garage";
import LapTimes from "../pages/garage/laptimes/LapTimes";
import Arcade from "../pages/arcade/Arcade";
import Apps from "../pages/apps/Apps";
import { Route, Routes } from "react-router-dom";
import { Box, Grid } from "@mui/material";

export default function BaseLayout() {
  return (
    <Box className={Style.dark}>
      <Grid
        container
        display={"flex"}
        flexDirection={"column"}
        minHeight={"100vh"}
        justifyContent={"space-between"}
      >
        <Grid item>
          <Navbar />
        </Grid>
        <Grid item flexGrow={1} className={Style.pages}>
          <Routes>
            <Route exact path={"/"} element={<Home />} />
            <Route exact path={"/about"} element={<About />} />
            <Route exact path={"/garage"} element={<Garage />} />
            <Route exact path={"/garage/laptimes"} element={<LapTimes />} />
            <Route exact path={"/arcade"} element={<Arcade />} />
            <Route exact path={"/apps"} element={<Apps />} />
          </Routes>
        </Grid>
        <Grid item>
          <Box
            component={"footer"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            py={"1.5rem"}
            sx={{ opacity: 0.7 }}
            width={"100%"}
          >
            <p>Welcome to my personal page by Gustavo Oliveira</p>
            <p>&copy; 2023</p>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
