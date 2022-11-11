import * as React from 'react';

import Editor from '@monaco-editor/react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

import Title from '../Main/LeftBlock/Title';
import ReferenceContent from './ReferenceContent';

const ResultEditor = () => {
  return (
    <BigContainer>
      <TitleButtonBar>
        <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>입력 코드</Typography>
      </TitleButtonBar>

      <EditorContainer>
        <Editor
          height="36vh"
          defaultLanguage="python"
          // value={saveContent[currentLabel] || skeletonCode}
          // onChange={handleEditorChange}
          theme="vs-dark"
        />
        <Editor
          height="36vh"
          defaultLanguage="python"
          // value={saveContent[currentLabel] || skeletonCode}
          // onChange={handleEditorChange}
          theme="vs-dark"
        />
      </EditorContainer>

      <Title title="코드 설명 및 참고자료" />
      <Terminal>
        <Box sx={{ fontSize: '15px', borderRight: '1px solid black' }}>
          <ReferenceContent />
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

const EditorContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Terminal = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #263747;
  padding: 10px 20px;
  color: white;
  border-bottom: 1px solid black;
  height: 100%;
`;

export default ResultEditor;
