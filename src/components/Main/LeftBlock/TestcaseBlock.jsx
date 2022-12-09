import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CurrentCodeLabelNumberContext from '../../../context/CurrentCodeLabelNumberContext';
import Pyodide from '../../../utils/Pyodide';
import ReturnValueContext from '../../../context/ReturnValueContext';
import { getItem } from '../../CustomEditor/localStorage';
import TestcaseContent from './TestcaseContent';

const TestcaseBlock = ({ subTitle = '', input = '', output = '' }) => {
  const [displayTestResult, setDisplayTestResult] = React.useState(false);
  const [testSuccess, setTestSuccess] = React.useState(false);
  const returnValueValue = React.useContext(ReturnValueContext);
  const currentCodeLabelNumberValue = React.useContext(CurrentCodeLabelNumberContext);
  // center block의 코드를 실행해서 user's input, output 가져와야 함.
  // test button을 눌렀을 때 currentLabel 을 getItem해서, pyodide를 실행하고 그 output을
  // prop로 받은 output과 비교해서 true/false를 설정한 후 display한다

  // pyodide는 getItem과 resultValue context를 인자로 받는다.

  const handleTestButton = () => {
    setDisplayTestResult(true);
    Pyodide(getItem(currentCodeLabelNumberValue.currentCodeLabelNumber), returnValueValue);

    if (Number(returnValueValue.returnValue) === output) setTestSuccess(true);
    else setTestSuccess(false);
  };

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
          <Typography
            sx={{
              color: testSuccess ? 'blue' : 'red',
              fontSize: '16px'
            }}
          >
            {displayTestResult && (testSuccess ? '성공' : '실패')}
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
            onClick={handleTestButton}
          >
            채점
          </Button>
        </Box>
      </Box>

      <TestcaseContent input={input} output={output} yourOutput={output} success={testSuccess} />
    </>
  );
};

export default TestcaseBlock;
