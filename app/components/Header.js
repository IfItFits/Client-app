import React from "react";
//mui import
import {
  Badge,
  Box,
  Stack,
  Typography
} from "@mui/material";
import { CiShoppingCart } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
//component import
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <Stack
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Stack>
        <Box
          component="img"
          sx={{
            width: "10rem"
          }}
          src="/assets/MainLogo1.png"
          alt="The IfItFits Main Logo"
        >
        </Box>
      </Stack>
      <Stack>
        <SearchBar />
      </Stack>
      <Stack
        flexDirection="row"
        gap={4}
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack
          flexDirection="row"
          gap={1}
          justifyContent="space-between"
          alignItems="center"
        >
          <CiShoppingCart
            size={30}
          />
          <Typography>
            Cart
          </Typography>
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
          <Typography>
            Account
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  )
}


export default Header;