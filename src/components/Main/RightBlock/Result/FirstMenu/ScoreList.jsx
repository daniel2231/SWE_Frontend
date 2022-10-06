import React from 'react';
import styled from '@emotion/styled';
import { Box, Grid, Typography } from '@mui/material';

const ScoreList = () => {
  const [activeMenuName, setActiveMenuName] = React.useState(1);
  return (
    <MenuNameBox activeMenuName={activeMenuName} setActiveMenuName={setActiveMenuName}>
      {activeMenuName === 1 && <FunctionContentBox />}
      {activeMenuName === 2 && <EfficiencyContentBox />}
      {activeMenuName === 3 && <ReadabilityContentBox />}
    </MenuNameBox>
  );
};

const MenuNameBox = ({ activeMenuName, setActiveMenuName, children }) => {
  return (
    <>
      <Grid container>
        <Grid item xs={4}>
          <MenuName
            onClick={() => {
              setActiveMenuName(1);
            }}
            sx={{
              backgroundColor: activeMenuName === 1 ? '#183c65' : '#c6d0db',
              color: activeMenuName === 1 ? 'white' : 'black'
            }}
          >
            기능 점수
          </MenuName>
        </Grid>
        <Grid item xs={4}>
          <MenuName
            onClick={() => {
              setActiveMenuName(2);
            }}
            sx={{
              backgroundColor: activeMenuName === 2 ? '#183c65' : '#c6d0db',
              color: activeMenuName === 2 ? 'white' : 'black'
            }}
          >
            효율 점수
          </MenuName>
        </Grid>
        <Grid item xs={4}>
          <MenuName
            onClick={() => {
              setActiveMenuName(3);
            }}
            sx={{
              backgroundColor: activeMenuName === 3 ? '#183c65' : '#c6d0db',
              color: activeMenuName === 3 ? 'white' : 'black'
            }}
          >
            가독성 점수
          </MenuName>
        </Grid>
      </Grid>
      {children}
    </>
  );
};

const FunctionContentBox = () => {
  const testcaseList = [
    {
      title: '테스트케이스 1',
      hidden: '히든',
      input: 'solution(0)',
      output: '1',
      yourOutput: '4'
    },
    {
      title: '테스트케이스 2',
      hidden: '',
      input: '-',
      output: '-',
      yourOutput: '-'
    },
    {
      title: '테스트케이스 3',
      hidden: '히든',
      input: 'solution(0)',
      output: '*\n*\n*\n***\n*****\n*\n*\n*\n***\n*****\n',
      yourOutput: '4'
    },
    {
      title: '테스트케이스 3',
      hidden: '히든',
      input: 'solution(0)',
      output: '*\n*\n*\n***\n*****\n*\n*\n*\n***\n*****\n',
      yourOutput: '4'
    },
    {
      title: '테스트케이스 3',
      hidden: '히든',
      input: 'solution(0)',
      output: '*\n*\n*\n***\n*****\n*\n*\n*\n***\n*****\n',
      yourOutput: '4'
    },
    {
      title: '테스트케이스 3',
      hidden: '히든',
      input: 'solution(0)',
      output: '*\n*\n*\n***\n*****\n*\n*\n*\n***\n*****\n',
      yourOutput: '4'
    }
  ];

  return (
    <Container sx={{ maxHeight: 200 }}>
      <Grid container sx={{ borderBottom: '1px solid black', backgroundColor: '#d9d9d9' }}>
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
            <TableLabel sx={{ color: item.hidden && '#8443B7', fontSize: '12px' }}>
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
            <TableLabel sx={{ color: item.output === item.yourOutput ? '#182DED' : '#ED2418' }}>
              {item.output === item.yourOutput ? '통과' : '실패'}
            </TableLabel>
          </Grid>
        </Grid>
      ))}
    </Container>
  );
};

const EfficiencyContentBox = () => {
  const efficiencyList = [
    {
      title: 'Line of Codes',
      intent: 'Line of Correct Code: 5 lines',
      yours: 'Line of Your Code: 5 lines',
      totalScore: 20,
      yourScore: 20
    },
    {
      title: 'Reservation Words',
      intent: 'Input: solution(3), Output: 2',
      yours: 'Your Output: 4',
      totalScore: 20,
      yourScore: 20
    },
    {
      title: 'Data Flow Complexity',
      intent: 'Input: solution(3)',
      yours: 'Output: 4',
      totalScore: 20,
      yourScore: 18
    },
    {
      title: 'Control Flow Complexity',
      intent: 'Input: solution(3), Output: 2',
      yours: 'Your Output: 4',
      totalScore: 20,
      yourScore: 15
    }
  ];

  return (
    <Container sx={{ maxHeight: 200 }}>
      <Grid container sx={{ borderBottom: '1px solid black', backgroundColor: '#d9d9d9' }}>
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
            <TableLabel sx={{ color: item.yourScore === item.totalScore ? '#182DED' : '#ED2418' }}>
              {item.yourScore}/{item.totalScore}
            </TableLabel>
          </Grid>
        </Grid>
      ))}
    </Container>
  );
};

const ReadabilityContentBox = () => {
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
    <Container sx={{ maxHeight: 200 }}>
      <Grid container sx={{ backgroundColor: '#d9d9d9' }}>
        <Grid item xs={10}>
          <TableLeftData sx={{ fontWeight: 'bold' }}>항목</TableLeftData>
        </Grid>
        <Grid item xs={2}>
          <TableLabel>점수</TableLabel>
        </Grid>
      </Grid>
      <Grid container sx={{ borderBottom: '1px solid black', backgroundColor: '#d9d9d9' }}>
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
                sx={{ color: item.yourScore === item.totalScore ? '#182DED' : '#ED2418' }}
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
  overflow: auto;
`;

const MenuName = styled(Box)`
  border-radius: 7px 7px 0px 0px;
  text-align: center;
  border-bottom: 1px solid black;
  cursor: pointer;
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
`;

const TableLeftData = styled(Typography)`
  text-align: left;
  font-size: 14px;
  padding: 3px;
`;

export default ScoreList;
