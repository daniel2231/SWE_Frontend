import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TestSuccessContext from '../../../context/TestSuccessContext';

const SubTitle = ({ subTitle = '', output = '' }) => {
  const testResult = React.useContext(TestSuccessContext);

  // center block의 코드를 실행해서 user's input, output 가져와야 함.
  const handleTestButton = (tempOutput) => {
    if (tempOutput === 0) testResult.setTestResult(true);
    else testResult.setTestResult(false);

  };

  if (subTitle.includes('테스트케이스'))
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#C6D0DB',
          padding: '7px 20px'
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
          <Typography sx={{ color: 'black', fontSize: '16px', fontWeight: 'bold' }}>
            {subTitle}
          </Typography>
          <Typography
            sx={{
              color: testResult.testResult ? 'blue' : 'red',
              fontSize: '16px',
              fontWeight: 'bold'
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
  return (
    <Box
      sx={{
        backgroundColor: '#C6D0DB',
        padding: '7px 20px',
        color: 'black',
        fontSize: '16px',
        fontWeight: 'bold'
      }}
    >
      {subTitle}
    </Box>
  );
};

export default SubTitle;
