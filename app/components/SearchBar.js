"use client"
import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import IconButton from "@mui/material/IconButton";
import { InputAdornment, TextField, Box } from '@mui/material';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log(searchTerm);
  };

  return (
    <Box
      width={{
        mobileS: "300px",
        tablet: "500px"
      }}
    >
      <TextField
        id="search-bar"
        placeholder="Search Products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton onClick={handleSearch}>
                <CiSearch />
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{
          width: "100%",
          '& .MuiInputBase-root': {
            borderRadius: "30px"
          },
        }}
      />
    </Box>
  );
};

export default SearchBar