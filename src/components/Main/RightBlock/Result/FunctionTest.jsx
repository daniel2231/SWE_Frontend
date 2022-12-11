import React from 'react';
import styled from '@emotion/styled';
import { Box, Grid, Typography } from '@mui/material';

const FunctionTest = () => {
  const testcaseList = [
    {
      title: '테스트 1',
      hidden: '',
      input: 'solution(0)',
      output: '1',
      yourOutput: '4'
    },
    {
      title: '테스트 2',
      hidden: '',
      input: '-',
      output: '-',
      yourOutput: '-'
    },
    {
      title: '테스트 3',
      hidden: '히든',
      input: '',
      output: '',
      yourOutput: ''
    },
    {
      title: '테스트 3',
      hidden: '히든',
      input: '',
      output: '',
      yourOutput: 'fail'
    }
  ];

  return (
    <Container>
      <Grid container sx={{ borderBottom: '1px solid black' }}>
        <Grid item xs={1}>
          <TableLabel />
        </Grid>
        <Grid item xs={2.5}>
          <TableLabel>case</TableLabel>
        </Grid>
        <Grid item xs={2.5}>
          <TableLabel>Input</TableLabel>
        </Grid>
        <Grid item xs={2}>
          <TableLabel>Output</TableLabel>
        </Grid>
        <Grid item xs={2}>
          <TableLabel>YourOutput</TableLabel>
        </Grid>
        <Grid item xs={2}>
          <TableLabel>Result</TableLabel>
        </Grid>
      </Grid>

      {testcaseList.map((item) => (
        <Grid container sx={{ borderBottom: '1px solid black' }}>
          <Grid item xs={1}>
            <TableLabel sx={{ color: item.hidden && '#C995F1', fontSize: '6px' }}>
              {item.hidden}
            </TableLabel>
          </Grid>
          <Grid item xs={2.5}>
            <TableData>{item.title}</TableData>
          </Grid>
          <Grid item xs={2.5}>
            <TableData>{item.input}</TableData>
          </Grid>
          <Grid item xs={2}>
            <TableData>{item.output}</TableData>
          </Grid>
          <Grid item xs={2}>
            <TableData>{item.yourOutput}</TableData>
          </Grid>
          <Grid item xs={2}>
            <TableLabel sx={{ color: item.output === item.yourOutput ? '#4557FE' : '#ED2418' }}>
              {item.output === item.yourOutput ? '통과' : '실패'}
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
`;

const TableData = styled(Typography)`
  text-align: center;
  font-size: 14px;
  padding: 3px;
  letter-spacing: -0.1rem;
`;

export default FunctionTest;
