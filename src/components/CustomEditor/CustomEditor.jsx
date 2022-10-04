import React from 'react';

import Editor from '@monaco-editor/react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';

import { Button, Typography } from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import FolderSharpIcon from '@mui/icons-material/FolderSharp';
import RestartAltSharpIcon from '@mui/icons-material/RestartAltSharp';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

const CustomEditor = () => {
  return (
    <>
      <Container>
        <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>코드 입력</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <Label>1</Label>
          <Label>2</Label>
          <Label>3</Label>
          <SaveOutlinedIcon sx={{ cursor: 'pointer', marginLeft: '1rem' }} />
        </Box>
      </Container>

      <Editor
        defaultLanguage="javascript"
        defaultValue="// 코드를 입력하세요."
        style={{ height: '70vh' }}
      />

      <Container>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <FolderSharpIcon style={{ cursor: 'pointer' }} />
          <RestartAltSharpIcon style={{ cursor: 'pointer' }} />
          <ContentCopyOutlinedIcon style={{ cursor: 'pointer' }} />
          <FileDownloadOutlinedIcon style={{ cursor: 'pointer' }} />
        </Box>

        <Box sx={{ display: 'flex', gap: 5 }}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <ActionButton>실행</ActionButton>
            <ActionButton>채점</ActionButton>
          </Box>

          <ActionButton style={{ backgroundColor: '#409BFF' }}>제출</ActionButton>
        </Box>
      </Container>
    </>
  );
};

const Container = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const Label = styled(Box)`
  background-color: #53769d;
  width: auto;
  height: auto;
  padding: 0 1rem;
  margin: 0 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: #8faccd;
    // 활성화중인 색 : 183C65
  }
`;

const ActionButton = styled(Button)`
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.2rem;
  border-radius: 1rem;
  background-color: #c6d0db;
  padding: 0;
`;
export default CustomEditor;
