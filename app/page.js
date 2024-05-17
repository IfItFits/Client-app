import React from "react";
import {
  Box
} from "@mui/material";
import Categories from "./components/Categories";
import LandingCarousel from "./components/LandingCarousel";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Box
        component="main"
        sx={{
          bgcolor: "#FFFFFF",
          overflow: "hidden",
        }}
        paddingLeft={{
          mobileS: "1.5rem",
          tablet: "3rem"
        }}
        paddingRight={{
          mobileS: "1.5rem",
          tablet: "3rem"
        }}
      >
        <LandingCarousel />
        <Categories />
        <Footer />
      </Box >
    </>
  );
}
