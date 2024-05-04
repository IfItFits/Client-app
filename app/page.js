import React from "react";
import {
  Box
} from "@mui/material";
import Header from "./components/Header";

export default function Home() {
  return (
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
      <Header />
    </Box>
  );
}
