import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';

const TestcaseContent = ({ input = '', output = '', yourOutput = '', success = false }) => {
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
        <Label yourOutput={yourOutput} success={success} />
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

const Label = ({ labelTitle = '', input = '', output = '', yourOutput = '', success = false }) => {
  return (
    <Box sx={{ width: 150, textAlign: 'center' }}>
      {labelTitle && (
        <Typography sx={{ fontWeight: 'bold', letterSpacing: '-1px' }}>{labelTitle}</Typography>
      )}
      {input && <Typography>{input}</Typography>}
      {output && <Typography>{output}</Typography>}
      {yourOutput &&
        yourOutput.map((item) => (
          <Typography sx={{ color: success ? 'blue' : 'red' }}>{item}</Typography>
        ))}
    </Box>
  );
};

export default TestcaseContent;
