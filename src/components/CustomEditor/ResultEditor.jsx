import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { DiffEditor } from '@monaco-editor/react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Title from '../Main/LeftBlock/Title';
import ReferenceContent from './ReferenceContent';
import { getItem } from './localStorage';
import CodeExplanation from './CodeExplanation';

const ResultEditor = () => {
  const goodCode = `def good(n):
  print(n)
good(1)
  `;
  const { state } = useLocation();
  const [myCode, setMyCode] = React.useState('');
  React.useEffect(() => {
    if (state) setMyCode(getItem(state.currentCodeLabelNumber));
  }, [state]);

  return (
    <BigContainer>
      <TitleButtonBar>
        <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>입력 코드</Typography>
      </TitleButtonBar>

      <DiffEditor
        height="36vh"
        defaultLanguage="python"
        original={myCode}
        modified={goodCode}
        theme="vs-dark"
        options={{ readOnly: true }}
      />

      <Title title="코드 설명 및 참고자료" />
      <Terminal>
        <Box sx={{ fontSize: '15px', borderRight: '1px solid black' }}>
          <CodeExplanation />
        </Box>
        <Box sx={{ fontSize: '15px', overflow: 'auto' }}>
          <ReferenceContent />
        </Box>
      </Terminal>
    </BigContainer>
  );
};

const BigContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const TitleButtonBar = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #263747;
  padding: 10px 20px;
  color: white;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  width: 100%;
`;

const Terminal = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #263747;
  padding: 10px 20px;
  color: white;
  border-bottom: 1px solid black;
  height: 80%;
`;

export default ResultEditor;
