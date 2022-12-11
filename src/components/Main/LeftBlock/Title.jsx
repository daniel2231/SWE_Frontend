import React from 'react';
import Box from '@mui/material/Box';

const Title = ({ title }) => {
  return (
    <Box
      sx={{
        backgroundColor: '#263747',
        padding: '10px 20px',
        color: 'white',
        fontSize: '20px',
        fontWeight: 'bold',
        borderBottom: '1px solid black',
        borderTop: '1px solid black',
        borderRight: '1px solid black',
        letterSpacing: '-2px'
      }}
    >
      {title}
    </Box>
  );
};

export default Title;
