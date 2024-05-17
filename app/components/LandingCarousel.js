"use client"
import React from 'react'
//carousel import
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
//mui import
import { Stack, Box } from '@mui/material';
import useMediaQuery from "@mui/material/useMediaQuery";
import { IconButton } from "@mui/material";
import { FcPrevious, FcNext } from "react-icons/fc";
import Link from "next/link";

const carouselItem = [
  {
    url: "/assets/carouselDemo.jpg",
    path: "/",
  },
  {
    url: "/assets/carouselDemo.jpg",
    path: "/",
  },
  {
    url: "/assets/carouselDemo.jpg",
    path: "/",
  },
]

const LandingCarousel = () => {
  const isTablet = useMediaQuery((theme) => theme.breakpoints.up("tablet"));
  const isTabletL = useMediaQuery((theme) => theme.breakpoints.up("tabletL"));


  return (
    <Box
      sx={{
        ".slide": {
          borderRadius: "10px !important",
          mx: { tablet: "1rem !important" },
          overflow: "hidden",
        },
      }}
    >
      <Carousel
        showStatus={false}
        centerMode={true}
        autoPlay
        showIndicators={false}
        centerSlidePercentage={isTabletL ? 50 : isTablet ? 60 : 100}
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          // horizontal

          if (isSelected) {
            return (
              <li
                style={{
                  backgroundColor: "#a34437",
                  width: "20px",
                  height: "4px",
                  borderRadius: "2px",
                  margin: "0 5px",
                }}
                aria-label={`Selected: ${label} ${index + 1}`}
                title={`Selected: ${label} ${index + 1}`}
              />
            );
          }
          return (
            <li
              style={{
                backgroundColor: "rgba(163, 68, 55,0.4)",
                width: "20px",
                height: "4px",
                borderRadius: "2px",
                margin: "0 5px",
              }}
            ></li>
          );
        }}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <IconButton
              type="button"
              onClick={onClickHandler}
              title={label}
              sx={{
                position: "absolute",
                zIndex: 2,
                top: "calc(50% - 15px)",
                width: 30,
                height: 30,
                cursor: "pointer",
                left: 15,
                bgcolor: "#fff",
                "&:hover": {
                  bgcolor: "rgba(256,256,256,0.5)",
                },
              }}
            >
              <FcPrevious />
            </IconButton>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <IconButton
              type="button"
              onClick={onClickHandler}
              title={label}
              sx={{
                position: "absolute",
                zIndex: 2,
                top: "calc(50% - 15px)",
                width: 30,
                height: 30,
                cursor: "pointer",
                right: 15,
                bgcolor: "#fff",
                "&:hover": {
                  bgcolor: "rgba(256,256,256,0.5)",
                },
              }}
            >
              <FcNext />
            </IconButton>
          )
        }
        showThumbs={false}
        showArrows={true}
      >
        {
          carouselItem.map((item, index) => {
            return (
              <Link key={index} href={item.path} className="link">
                <Box
                  component="img"
                  src={item.url}
                  key={index}
                  width={{
                    mobileXS: "100%",
                    tabletS: "100%",
                    tablet: "30rem",
                  }}
                  height={{
                    tablet: "15rem",
                    tabletL: "22rem",
                  }}
                >
                </Box>
              </Link>
            )
          })
        }
      </Carousel>
    </Box>
  )
}

export default LandingCarousel;