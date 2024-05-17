import React from 'react'
import Chip from '@mui/material/Chip';
import { Box } from '@mui/material';

export const SectionName = ({ text }) => {

  const chipStyles = {
    color: 'white',
    fontWeight: '500',
    fontSize: {
      mobileS: '0.6rem',
      tablet: '0.8rem',
    },
    margin: '0 0 7px 0',
    backgroundImage: 'linear-gradient(to right, #4169e1, #0D2452)',
  };
  return (
    <Box
      width="max-content"
    >
      <Chip
        label={text}
        clickable={false}
        style={chipStyles}
      />
    </Box>
  );
}

export default SectionName;