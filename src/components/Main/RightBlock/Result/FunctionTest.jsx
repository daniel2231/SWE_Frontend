import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { Box, Grid, Typography } from '@mui/material';

function getItem(key) {
  const value = localStorage.getItem(key);
  if (!value) return null;
  return JSON.parse(value);
}

const FunctionTest = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const [myCode] = React.useState(getItem(state.currentCodeLabelNumber));
  const [testcaseList, setTestcaseList] = useState([]);
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/unittests/result/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        option: 1,
        code_submitted: myCode,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setTestcaseList(res.unittest_result);
      });
  }, []);

  // disable eslint
  // const testcaseList1 = [
  //   {
  //     title: '테스트 1',
  //     hidden: '',
  //     input: 'solution(0)',
  //     output: '1',
  //     yourOutput: '4'
  //   },
  //   {
  //     title: '테스트 2',
  //     hidden: '',
  //     input: '-',
  //     output: '-',
  //     yourOutput: '-'
  //   },
  //   {
  //     title: '테스트 3',
  //     hidden: '히든',
  //     input: '',
  //     output: '',
  //     yourOutput: ''
  //   },
  //   {
  //     title: '테스트 3',
  //     hidden: '히든',
  //     input: '',
  //     output: '',
  //     yourOutput: 'fail'
  //   }
  // ];

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
            <TableData>테스트케이스 {item.unittestId}</TableData>
          </Grid>
          <Grid item xs={2.5}>
            <TableData>{item.test_content}</TableData>
          </Grid>
          <Grid item xs={2}>
            <TableData>{item.test_answer}</TableData>
          </Grid>
          <Grid item xs={2}>
            <TableData>{item.test_answer}</TableData>
          </Grid>
          <Grid item xs={2}>
            <TableLabel sx={{ color: item.output === item.yourOutput ? '#4557FE' : '#ED2418' }}>
              {item.test_result === "/" ? '통과' : '실패'}
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
