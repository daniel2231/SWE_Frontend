import React from 'react';
import styled from '@emotion/styled';
import { Box, Grid, Typography } from '@mui/material';

const EfficiencyTest = (props) => {
  const cleanData = props.data
  const efficiencyList = [
    {
      title: 'Line of Codes',
      intent: 'Line of Correct Code: 5 lines',
      yours: 'Line of Your Code: 5 lines',
      totalScore: 25,
      yourScore: cleanData.metric.line_of_codes[0]
    },
    {
      title: 'Reservation Words',
      intent: 'Input: solution(3), Output: 2',
      yours: 'Your Output: 4',
      totalScore: 25,
      yourScore: cleanData.metric.halstead_difficulty[0]
    },
    {
      title: 'Data Flow Complexity',
      intent: 'Input: solution(3)',
      yours: 'Output: 4',
      totalScore: 25,
      yourScore: cleanData.metric.dataflow_complexity[0]
    },
    {
      title: 'Control Flow Complexity',
      intent: 'Input: solution(3), Output: 2',
      yours: 'Your Output: 4',
      totalScore: 25,
      yourScore: cleanData.metric.controlflow_complexity[0]
    }
  ];

  return (
    <Container>
      <Grid container sx={{ borderBottom: '1px solid black' }}>
        <Grid item xs={5}>
          <TableLabel>항목</TableLabel>
        </Grid>
        <Grid item xs={5}>
          <TableLabel>내용</TableLabel>
        </Grid>

        <Grid item xs={2}>
          <TableLabel>점수</TableLabel>
        </Grid>
      </Grid>

      {efficiencyList.map((item) => (
        <Grid container sx={{ borderBottom: '1px solid black' }}>
          <Grid item xs={5}>
            <TableData>{item.title}</TableData>
          </Grid>
          <Grid item xs={5}>
            <TableLeftData>{item.intent}</TableLeftData>
            <TableLeftData>{item.yours}</TableLeftData>
          </Grid>

          <Grid item xs={2}>
            <TableLabel sx={{ color: item.yourScore === item.totalScore ? '#4557FE' : '#ED2418' }}>
              {item.yourScore}/{item.totalScore}
            </TableLabel>
          </Grid>
        </Grid>
      ))}
    </Container>
  );
};

const Container = styled(Box)`
  background-color: #263747;
  color: white;
`;

const TableLabel = styled(Typography)`
  text-align: center;
  font-size: 14px;
  padding: 3px;
  font-weight: bold;
  letter-spacing: -1px;
`;

const TableData = styled(Typography)`
  text-align: center;
  font-size: 14px;
  padding: 3px;
  letter-spacing: -1px;
`;

const TableLeftData = styled(Typography)`
  text-align: left;
  font-size: 14px;
  padding: 3px;
  letter-spacing: -0.5px;
`;

export default EfficiencyTest;
