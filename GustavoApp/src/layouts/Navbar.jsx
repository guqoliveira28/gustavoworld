import React from "react";
import Style from "./Navbar.module.scss";
import { Link, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import { info } from "../info/Info";

const links = [
  {
    name: info.logo,
    type: "logo",
    to: "/",
    active: "home",
  },
  {
    name: "Home",
    to: "/",
    active: "home",
  },
  {
    name: "About Me",
    to: "/about",
    active: "about",
  },
  {
    name: "Garage",
    to: "/garage",
    active: "garage",
  },
  {
    name: "My arcade",
    to: "/arcade",
    active: "arcade",
  },
  {
    name: "Apps",
    to: "/apps",
    active: "apps",
  },
];

export default function Navbar() {
  const location = useLocation();

  const isActive = (link) => {
    if (location.pathname.toLowerCase().includes(link)) {
      return true;
    } else if (location.pathname === "/" && link === "home") {
      return true;
    }
    return false;
  };

  return (
    <Box component={"nav"} width={"100%"} className={Style.navbar}>
      <Box
        component={"ul"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={{ xs: "2rem", md: "8rem" }}
        textTransform={"lowercase"}
        fontSize={"1rem"}
      >
        {links.map((link, index) => (
          <Box
            key={index}
            component={"li"}
            className={isActive(link.active) && !link.type && Style.active}
            sx={{ borderImageSource: info.gradient }}
          >
            <Link to={link.to} className={Style.link}>
              {!link.type && <p className={Style.name}>{link.name}</p>}
              {link.type && (
                <img src={link.name} alt="Logo" className={Style.logo} />
              )}
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
