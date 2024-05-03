"use client";

import createTheme from "@mui/material/styles/createTheme";
import responsiveFontSizes from "@mui/material/styles/responsiveFontSizes";

let t = createTheme({
  typography: {
    fontFamily: "Jost , sans-serif",
    title: {
      fontFamily: "Dancing Script, sans-serif",
      fontSize: "1.2rem",
    },
    fat: {
      fontFamily: "Dancing Script, sans- serif",
      fontSize: "2rem",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1280,
      xl: 1920,
      mobileXS: 0,
      mobileS: 320,
      mobileM: 375,
      mobileL: 425,
      tabletS: 585,
      tablet: 768,
      tabletL: 1024,
      laptopL: 1440,
      desktop: 2560,
    },
    height: {
      xs: 0,
      sm: 500,
      md: 700,
      lg: 900,
    },
  },
  palette: {
    primary: {
      main: "#231F1E",
      contrastText: "#2C4492",
      light: "#62B4C0",
    },
    tertiary: {
      main: "#16545b",
      contrastText: "#fff",
    },
    secondary: {
      main: "#f8e5e5",
      contrastText: "#303030",
    },
    common: {
      main: "#303030",
      contrastText: "#fff",
    },
    background: {
      grey: "#f2f2f2",
    },
    accent: {
      main: "#fad5c2",
      contrastText: "#fff",
    },
  },
});

const theme = responsiveFontSizes(t);

theme.typography.h4 = {
  fontSize: "1.5rem",
  fontWeight: "400",
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
};

export default theme;
