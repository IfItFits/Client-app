import React from 'react'
import { Stack, Box, Typography } from '@mui/material'
//icon import
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Stack
      flexDirection={{
        mobileS: "column",
        tablet: "row",
      }}
      justifyContent={"space-between"}
      borderTop={"1px solid #CDCED0"}
      paddingY={4}
      mt={5}
      gap={3}
    >
      <Stack
        flex={1.5}
        justifyContent={"top"}
        alignItems={"center"}
        gap={2}
      >
        <Box
          component={"img"}
          src="/assets/MainLogo1.png"
          alt="The IfItFits Main Logo"
          sx={{
            width: {
              mobileS: 100,
              tablet: 100,
              tabletL: 130
            },
            height: {
              mobileS: 50,
              tablet: 50,
              tabletL: 60
            }
          }}
        >
        </Box>
        <Typography
          fontSize={{
            mobileS: "0.9rem",
            tablet: "1rem",
          }}
          textAlign={"center"}
        >
          Depict different flavourst consists of culture, practices, social stereotypes, etc etc of India using minimal and pop designs
        </Typography>
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          gap={5}
          my={2}
        >
          <Box> <FaFacebook size={20} color='#3b5998' /> </Box>
          <Box> <FaTwitter size={20} color='#3b5998' /> </Box>
          <Box> <FaInstagram size={20} color='#3b5998' /> </Box>
          <Box> <FaLinkedin size={20} color='#3b5998' /> </Box>
        </Stack>
      </Stack>
      <Stack
        flex={3}
        flexDirection={"row"}
      >
        <Stack
          flex={1}
          px={3}
          textAlign={{
            tablet: "center"
          }}
        >
          <Typography
            fontSize={{
              mobileS: "0.8rem",
              tablet: "1rem",
            }}
            fontWeight={"500"}
            mb={3}
          >
            Shop
          </Typography>
          <Stack
            flexDirection={"column"}
            gap={1}
            justifyContent={"center"}
          >
            <Typography
              fontSize={{
                mobileS: "0.8rem",
                tablet: "1rem",
              }}
            >
              Men
            </Typography>
            <Typography
              fontSize={{
                mobileS: "0.8rem",
                tablet: "1rem",
              }}
            >
              Women
            </Typography>
            <Typography
              fontSize={{
                mobileS: "0.8rem",
                tablet: "1rem",
              }}
            >
              Kids
            </Typography>
            <Typography
              fontSize={{
                mobileS: "0.8rem",
                tablet: "1rem",
              }}
            >
              Sales
            </Typography>
          </Stack>
        </Stack>

        <Stack
          flex={1}
          textAlign={{
            tablet: "center"
          }}
          px={3}
        >
          <Typography
            fontSize={{
              mobileS: "0.8rem",
              tablet: "1rem",
            }}
            fontWeight={"500"}
            mb={3}
          >
            Help
          </Typography>
          <Stack
            flexDirection={"column"}
            gap={1}
            justifyContent={"center"}
          >
            <Typography
              fontSize={{
                mobileS: "0.8rem",
                tablet: "1rem",
              }}
            >
              Contact Us
            </Typography>
            <Typography
              fontSize={{
                mobileS: "0.8rem",
                tablet: "1rem",
              }}
            >
              FAQ
            </Typography>
            <Typography
              fontSize={{
                mobileS: "0.8rem",
                tablet: "1rem",
              }}
            >
              Accessability
            </Typography>
          </Stack>
        </Stack>

        <Stack
          flex={1}
          px={3}
          textAlign={{
            tablet: "center"
          }}
        >
          <Typography
            fontSize={{
              mobileS: "0.8rem",
              tablet: "1rem",
            }}
            fontWeight={"500"}
            mb={3}
          >
            About
          </Typography>
          <Stack
            flexDirection={"column"}
            gap={1}
            justifyContent={"center"}
          >
            <Typography
              fontSize={{
                mobileS: "0.8rem",
                tablet: "1rem",
              }}
            >
              Our Story
            </Typography>
            <Typography
              fontSize={{
                mobileS: "0.8rem",
                tablet: "1rem",
              }}
            >
              Our Team
            </Typography>
            <Typography
              fontSize={{
                mobileS: "0.8rem",
                tablet: "1rem",
              }}
            >
              Term & Conditions
            </Typography>
            <Typography
              fontSize={{
                mobileS: "0.8rem",
                tablet: "1rem",
              }}
            >
              Sales
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack >
  )
}

export default Footer