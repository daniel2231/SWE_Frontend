import React from 'react';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import { Grid, Typography } from '@mui/material';
import DonutGraph from './DonutGraph';

const ScoreGraph = () => {
  const donutData = [
    { title: '기능', value: 40, color: '#00B0F0' },
    { title: '효율', value: 25, color: '#92D050' },
    { title: '가독성 ', value: 15, color: '#FFC000' }
  ];

  const totalScore = donutData.map((item) => item.value).reduce((prev, curr) => prev + curr, 0);

  return (
    <Container >
      <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>
        최종성적: {totalScore}점
      </Typography>
      <Grid container spacing={8} sx={{ paddingLeft: '2rem' }}>
        <Grid item xs={6}>
          <DonutGraph data={donutData} />
        </Grid>
        <Grid item xs={6}>
          <ScoreLabelContainer>
            <Box>
              {donutData.map((item) => (
                <LabelText>{item.title}</LabelText>
              ))}
            </Box>
            <Box>
              {donutData.map((item) => (
                <LabelText>{item.value}</LabelText>
              ))}
            </Box>
          </ScoreLabelContainer>
          <Box sx={{ marginLeft: '1rem' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '2rem', padding: '5px' }}>
              <LabelText style={{ color: 'red' }}>표절율</LabelText>
              <LabelText style={{ color: 'red' }}>25%</LabelText>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  padding: 20px 10px;
  font-size: 14px;
`;

const ScoreLabelContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: fit-content;
  margin-top: 1rem;
  margin-left: 1rem;
  font-size: 20px;
  padding: 5px;
  border-bottom: 1px solid black;
`;

const LabelText = styled(Typography)`
  text-align: center;
  font-size: 18px;
  padding: 5px;
`;
export default ScoreGraph;
