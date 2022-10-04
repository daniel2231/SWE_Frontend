import React from 'react';
import Box from '@mui/material/Box';

const Title = ({ title }) => {
  return (
    <Box
      sx={{
        backgroundColor: '#53769D',
        padding: '10px 20px',
        color: 'white',
        fontSize: '20px',
        fontWeight: 'bold'
      }}
    >
      {title}
    </Box>
  );
};

export default Title;
