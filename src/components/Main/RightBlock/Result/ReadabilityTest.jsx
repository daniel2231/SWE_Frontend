import React from 'react';
import styled from '@emotion/styled';
import { Box, Grid, Typography } from '@mui/material';

const ReadabilityTest = () => {
  const readabilityList = [
    {
      title: 'mypy',
      contents: [],
      totalScore: 20,
      yourScore: 20
    },
    {
      title: 'pylint',
      contents: [
        'Missing docstring in public module',
        'Formatting a regular string which could be a f-string'
      ],
      totalScore: 20,
      yourScore: 18
    },
    {
      title: 'pylint',
      contents: [
        'Missing docstring in public module',
        'Formatting a regular string which could be a f-string'
      ],
      totalScore: 20,
      yourScore: 18
    }
  ];

  return (
    <Container>
      <Grid container>
        <Grid item xs={10}>
          <TableLeftData sx={{ fontWeight: 'bold' }}>항목</TableLeftData>
        </Grid>
        <Grid item xs={2}>
          <TableLabel>점수</TableLabel>
        </Grid>
      </Grid>
      <Grid container sx={{ borderBottom: '1px solid black' }}>
        <Grid item xs={10}>
          <TableLeftData sx={{ fontWeight: 'bold' }}>점수</TableLeftData>
        </Grid>
      </Grid>

      {readabilityList.map((item) => (
        <>
          <Grid container>
            <Grid item xs={10}>
              <TableLeftData sx={{ fontWeight: 'bold' }}>{item.title}</TableLeftData>
            </Grid>
            <Grid item xs={2}>
              <TableLabel
                sx={{ color: item.yourScore === item.totalScore ? '#4557FE' : '#ED2418' }}
              >
                {item.yourScore}/{item.totalScore}
              </TableLabel>
            </Grid>
          </Grid>
          <Grid container sx={{ borderBottom: '1px solid black' }}>
            {item.contents.map((content, idx) => (
              <Grid item xs={10}>
                <TableLeftData>
                  {idx + 1}. {content}
                </TableLeftData>
              </Grid>
            ))}
          </Grid>
        </>
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
