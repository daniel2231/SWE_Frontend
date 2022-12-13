import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TestcaseContent from './TestcaseContent';

const TestcaseBlock = ({ subTitle = '', input = '', output = '', yourOutput }) => {
  // center block의 코드를 실행해서 user's input, output 가져와야 함.
  // test button을 눌렀을 때 currentLabel 을 getItem해서, pyodide를 실행하고 그 output을
  // prop로 받은 output과 비교해서 true/false를 설정한 후 display한다

  // pyodide는 getItem과 resultValue context를 인자로 받는다.
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#46515F',
          padding: '7px 20px',
          borderBottom: '1px solid black',
          letterSpacing: '-2px'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 3
          }}
        >
          <Typography sx={{ color: 'white', fontSize: '16px' }}>{subTitle}</Typography>
          {yourOutput === false ? (
            <Typography sx={{ color: 'white', fontSize: '16px' }}>실행 전</Typography>
          ) : (
            <Typography
              sx={{
                color: yourOutput.test_result === '/' ? 'blue' : 'red',
                fontSize: '16px'
              }}
            >
              {yourOutput.test_result === '/' ? '성공' : '실패'}
            </Typography>
          )}
        </Box>
      </Box>

      <TestcaseContent input={input} output={output} yourOutput={yourOutput} />
    </>
  );
};

export default TestcaseBlock;
