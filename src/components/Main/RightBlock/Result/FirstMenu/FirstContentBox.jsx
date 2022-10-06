import { Box } from '@mui/material';
import React from 'react';
import ScoreGraph from './ScoreGraph';
import ScoreList from './ScoreList';

const FirstContentBox = () => {
  return (
    <Box sx={{ minHeight: 499 }}>
      <ScoreGraph />
      <ScoreList />
    </Box>
  );
};

export default FirstContentBox;
