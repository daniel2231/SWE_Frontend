import React from 'react';
import styled from '@emotion/styled';
import { Box, Grid, Typography } from '@mui/material';

const ReadabilityTest = (props) => {
  const cleanData = props.data;

  return (
    <Container>
      <Grid container>
        <Grid item xs={10}>
          <TableLabel sx={{ fontWeight: 'bold' }}>항목</TableLabel>
        </Grid>
        <Grid item xs={2}>
          <TableLabel>점수</TableLabel>
        </Grid>
      </Grid>
      <Grid container sx={{ borderBottom: '1px solid black' }}>
        <Grid item xs={10}>
          <TableLabel sx={{ fontWeight: 'bold' }}>점수</TableLabel>
        </Grid>
      </Grid>
      {Object.keys(cleanData.readability).map((item) => (
        <Grid container>
          <Grid item xs={10}>
            <TableLeftData sx={{ fontWeight: 'bold' }}>{item}</TableLeftData>
          </Grid>
          <Grid item xs={2}>
            <TableLabel sx={{ color: cleanData.readability[item].score === 20 ? '#4557FE' : '#ED2418' }}>
              {cleanData.readability[item].score}/20
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

const TableLeftData = styled(Typography)`
  text-align: left;
  font-size: 14px;
  padding: 3px;
`;

export default ReadabilityTest;
