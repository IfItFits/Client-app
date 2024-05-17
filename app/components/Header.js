"use client";
import React from "react";
//mui import
import {
  Box,
  Stack,
  Typography
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { CiShoppingCart } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";
//component import
import SearchBar from "./SearchBar";

const Header = () => {
  const isTablet = useMediaQuery((theme) => theme.breakpoints.up("tablet"));
  const isTabletL = useMediaQuery((theme) => theme.breakpoints.up("tabletL"));

  return (
    <Stack
      display="flex"
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{
        position: "sticky",
        top: 0,
        pt: { mobileXS: 0, tablet: 1 },
        pb: { mobileXS: 0, tablet: 1 },
        zIndex: 1000,
        bgcolor: "#FFFFFF",
        overflow: "hidden",
      }}
      paddingLeft={{
        mobileS: "1rem",
        tablet: "2rem"
      }}
      paddingRight={{
        mobileS: "1.5rem",
        tablet: "3rem"
      }}
      my={1}
    >
      <Stack>
        <Box
          component="img"
          width={{
            mobileS: 100,
            tablet: 100,
            tabletL: 130
          }}
          height={{
            mobileS: 45,
            tablet: 50,
            tabletL: 60
          }}
          src="/assets/MainLogo1.png"
          alt="The IfItFits Main Logo"
        >
        </Box>
      </Stack>
      {
        isTablet && (
          <Stack>
            <SearchBar />
          </Stack>
        )
      }

      <Stack
        flexDirection="row"
        gap={{
          mobileS: 2,
          tablet: 4
        }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack>
          {
            !isTablet && (
              <CiSearch
                size={30}
              />
            )
          }
        </Stack>
        <Stack
          flexDirection="row"
          gap={1}
          justifyContent="space-between"
          alignItems="center"
        >
          <CiShoppingCart
            size={30}
          />
          {
            isTablet && (
              <Typography>
                Cart
              </Typography>
            )
          }
        </Stack>
        <Stack
          flexDirection="row"
          gap={1}
          justifyContent="space-between"
          alignItems="center"
        >
          <VscAccount
            size={25}
          />
          {
            isTablet && (
              <Typography>
                Account
              </Typography>
            )
          }
        </Stack>
      </Stack>
    </Stack>
  )
}


export default Header;