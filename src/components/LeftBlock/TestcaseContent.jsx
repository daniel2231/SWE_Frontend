import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import TestSuccessContext from '../../context/TestSuccessContext';

const TestcaseContent = ({ input = '', output = '' }) => {
  const success = React.useContext(TestSuccessContext);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '5px'
      }}
    >
      <LabelBox style={{ borderBottom: '1px solid black' }}>
        <Label labelTitle="Input" />
        <Label labelTitle="Output" />
      </LabelBox>
      <LabelBox>
        <Label input={input} />
        <Label output={output} success={success} />
      </LabelBox>
    </Box>
  );
};

const LabelBox = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px 5px;
  font-size: 14px;
`;

const Label = ({ labelTitle = '', input = '', output = '', success = false }) => {
  return (
    <Box sx={{ width: 150, textAlign: 'center' }}>
      {labelTitle && <Typography sx={{ fontWeight: 'bold' }}>{labelTitle}</Typography>}
      {input && <Typography>{input}</Typography>}
      {output && <Typography sx={{ color: success ? 'blue' : 'red' }}>{output}</Typography>}
    </Box>
  );
};

export default TestcaseContent;
