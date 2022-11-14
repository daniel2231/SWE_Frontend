import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TestSuccessContext from '../../../context/TestSuccessContext';

const SubTitle = ({ subTitle = '', output = '' }) => {
  const testResult = React.useContext(TestSuccessContext);

  // center block의 코드를 실행해서 user's input, output 가져와야 함.
  // test button을 눌렀을 때 currentLabel 을 getItem해서, pyodide를 실행하고 그 output을 
  // prop로 받은 output과 비교해서 true/false를 설정한 후 display한다
  
  // pyodide는 getItem과 resultValue context를 인자로 받는다.
  
  const handleTestButton = (tempOutput) => {
    if (tempOutput === 0) testResult.setTestResult(true);
    else testResult.setTestResult(false);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#46515F',
        padding: '7px 20px',
        borderBottom: '1px solid black',
        letterSpacing:'-2px'
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
        <Typography
          sx={{
            color: testResult.testResult ? 'blue' : 'red',
            fontSize: '16px'
          }}
        >
          {testResult.testResult ? '성공' : '실패'}
        </Typography>
      </Box>

      <Box>
        <Button
          size="small"
          sx={{
            fontSize: '14px',
            fontWeight: 'bold',
            letterSpacing: 4,
            borderRadius: 5,
            backgroundColor: 'white',
            padding: 0
          }}
          onClick={() => {
            handleTestButton(output);
          }}
        >
          검증
        </Button>
      </Box>
    </Box>
  );
};

export default SubTitle;
