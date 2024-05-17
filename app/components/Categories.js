"use client";
import { Box, IconButton, Typography } from "@mui/material";
import { Stack } from "@mui/material";
import Grid from '@mui/material/Grid';
import React from "react";
import SectionName from "./SectionName";

const items = [
  {
    title: "Traditional",
    path: "/TraditionalPatterns.jpg",
  },
  {
    title: "Regional",
    path: "/RegionalFlavors.webp",
  },
  {
    title: "Fusion",
    path: "/FusionWear.jpg",
  },
  {
    title: "Street",
    path: "/StreetStyle.jpeg",
  },
  {
    title: "Cultural",
    path: "/CulturalCelebrations.png",
  },
  {
    title: "Gender Fluid",
    path: "/GenderFluid.webp",
  },
];

export default function Categories() {

  return (
    <Stack
      my={{
        mobileS: 1,
        tablet: 3,
        tabletL: 4,
      }}
    >
      <Box
        my={2}
        py={1}
        display="flex"
        justifyContent="center"
      >
        <SectionName text={"Categories"} />
      </Box>

      <Grid
        container
        columnSpacing={{
          mobileS: 6,
          tabletL: 11,
        }}
        rowSpacing={2}
      >
        {items.map(({ title, path }, index) => {
          return (
            <Grid
              item
              lg={2}
              md={2}
              sm={4}
              xs={4}
              key={index}
            >
              <Box
                display="flex"
                gap={1}
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                key={index}
              >
                <Box
                  component="img"
                  width={{
                    mobileS: 80,
                    mobileL: 100,
                    tabletS: 150,
                    tablet: 100,
                    tabletL: 150,
                  }}
                  height={{
                    mobileS: 95,
                    mobileL: 120,
                    tabletS: 180,
                    tablet: 120,
                    tabletL: 180,
                  }}
                  sx={{ bgcolor: "#999999", borderRadius: 2 }}
                  src={`/assets/${path}`}
                  alt={`${title}`}
                >
                </Box>
                <Typography
                  sx={{
                    fontSize: {
                      mobileS: "0.8rem",
                      tabletS: "1rem",
                      tablet: "0.9rem",
                      tabletL: "1.3rem",
                    },
                    textAlign: "center",
                  }}
                  variant="title"
                >{title}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
}
