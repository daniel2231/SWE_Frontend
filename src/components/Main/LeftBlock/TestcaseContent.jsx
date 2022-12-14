import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';


const TestcaseContent = ({ input = '', output = '', yourOutput = '' }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'left',
        alignItems: 'center',
        margin: '5px'
      }}
    >
      <LabelBox>
        <Label labelTitle="Input" />
        <Label input={input} />
        <Label labelTitle="Output" />
        <Label output={output} />
      </LabelBox>
      <LabelBox>
        <p />
        <p />
        <Label labelTitle="Your Output" />
        <Label yourOutput={yourOutput.test_answer} />
      </LabelBox>
    </Box>
  );
};

const LabelBox = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 5px 5px;
  font-size: 14px;
`;

const Label = ({ labelTitle = '', input = '', output = '', yourOutput = '' }) => {
  return (
    <Box sx={{ width: 150, textAlign: 'center' }}>
      {labelTitle && (
        <Typography sx={{ fontWeight: 'bold', letterSpacing: '-1px' }}>{labelTitle}</Typography>
      )}
      {input && <Typography>{input}</Typography>}
      {output && <Typography>{output}</Typography>}
      {/* 수정하기  */}
      {yourOutput && <Typography>{yourOutput}</Typography>}
    </Box>
  );
};

export default TestcaseContent;
