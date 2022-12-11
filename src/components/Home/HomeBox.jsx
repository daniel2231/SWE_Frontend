import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const HomeBox = ({ title = '', content = '' }) => {
  return (
    <Box
      sx={{
        width: 'fit-content',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '50px'
      }}
    >
      <Typography
        component="h1"
        variant="h5"
        sx={{ color: '#7890A0', fontWeight: 'bold', marginBottom: '10px' }}
      >
        {title}
      </Typography>
      <Typography component="p" variant="p" sx={{ fontWeight: 'regular' }}>
        {content}
      </Typography>
    </Box>
  );
};

export default HomeBox;
