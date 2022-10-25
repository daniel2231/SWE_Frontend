import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import Editor from '@monaco-editor/react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import FolderSharpIcon from '@mui/icons-material/FolderSharp';
import RestartAltSharpIcon from '@mui/icons-material/RestartAltSharp';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { getItem, setItem } from './localStorage';

const skeletonCode = 'function solution(n){\n  const test=0;\n}';
const saveLabelNumber = [1, 2, 3];

const CustomEditor = () => {
  const [currentLabel, setCurrentLabel] = React.useState(1);
  const handleCurrentLabel = (number) => {
    setCurrentLabel(number);
  };

  const [editorContent, setEditorContent] = React.useState({
    1: skeletonCode,
    2: skeletonCode,
    3: skeletonCode
  });
  const [saveContent, setSaveContent] = React.useState({
    1: '',
    2: '',
    3: ''
  });

  // 초기 에디터 내용 세팅
  React.useEffect(() => {
    if (getItem(currentLabel)) {
      setSaveContent((prev) => ({
        ...prev,
        [currentLabel]: getItem(currentLabel)
      }));
      setEditorContent((prev) => ({
        ...prev,
        [currentLabel]: getItem(currentLabel)
      }));
    }
    // setItem(1, skeletonCode);
    // setItem(2, skeletonCode);
    // setItem(3, skeletonCode);
  }, [currentLabel]);

  // 에디터 내용이 바뀔때마다 editorContent를 세팅
  // 실시간 저장을 위해서는 save Button과 똑같은 기능 해야함.
  const handleEditorChange = (value) => {
    setEditorContent((prev) => ({
      ...prev,
      [currentLabel]: value
    }));
    setSaveContent((prev) => ({
      ...prev,
      [currentLabel]: editorContent[currentLabel]
    }));
    setItem(currentLabel, editorContent[currentLabel]);
  };

  // 저장 버튼을 누르면 해당하는 라벨의 saveContent에 editorContent를 세팅
  const handleSaveButton = () => {
    setSaveContent((prev) => ({
      ...prev,
      [currentLabel]: editorContent[currentLabel]
    }));
    setItem(currentLabel, editorContent[currentLabel]);
    alert('저장 완료');
  };

  const DisplayFileContent = (file) => {
    const fr = new FileReader();
    fr.readAsText(file, 'UTF-8');
    fr.onload = () => {
      setSaveContent((prev) => ({
        ...prev,
        [currentLabel]: fr.result
      }));
      setEditorContent((prev) => ({
        ...prev,
        [currentLabel]: fr.result
      }));
      setItem(currentLabel, fr.result);
    };
  };

  const handleFolderOpenButton = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'text/plain, .js';
    input.click();
    input.onchange = (event) => {
      DisplayFileContent(event.target.files[0]);
    };
  };

  // reset을 누르면 초기화 코드로 다시 저장됨.
  const handleResetButton = () => {
    setSaveContent((prev) => ({
      ...prev,
      [currentLabel]: skeletonCode
    }));
    setEditorContent((prev) => ({
      ...prev,
      [currentLabel]: skeletonCode
    }));
    setItem(currentLabel, skeletonCode);
  };

  // 현재 작성 중인 코드를 복사함(저장안해도)
  const handleCopyButton = () => {
    window.navigator.clipboard.writeText(saveContent[currentLabel]).then(() => {
      alert('복사 완료');
    });
  };

  // 현재 작성 중인 코드를 다운함(저장안해도)
  const handleDownloadButton = () => {
    // Blob 생성자: 파일로 만들고자 하는것, 그것의 타입
    const blob = new Blob([saveContent[currentLabel]], { type: 'text/plain' });

    // Blob 객체를 나타내는 다운로드 url 생성
    const url = window.URL.createObjectURL(blob);

    // 다운로드 기능만 수행하는 a 태그 생성
    const a = document.createElement('a');
    a.href = url;
    a.download = `file${currentLabel}.js`;
    a.click();

    // 태그 및 url 삭제: 메모리 누수 방지
    a.remove();
    window.URL.revokeObjectURL(url);
  };

  const navigate = useNavigate();
  const handleRunButton = () => {};
  const handleGradeButton = () => {};
  const handleSubmitButton = () => {
    navigate('/result');
  };

  return (
    <>
      <Container sx={{ borderBottom: '.1px solid black' }}>
        <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>코드 입력</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
          {saveLabelNumber.map((item) => (
            <Label
              focus={currentLabel === item}
              onClick={() => {
                handleCurrentLabel(item);
              }}
              sx={{
                borderRadius: currentLabel === item ? '1rem 0 0 0' : ''
              }}
              key={item}
            >
              {item}
            </Label>
          ))}

          <SaveOutlinedIcon
            sx={{ cursor: 'pointer', marginLeft: '1rem' }}
            onClick={handleSaveButton}
          />
        </Box>
      </Container>

      <Editor
        defaultLanguage="javascript"
        value={saveContent[currentLabel] || skeletonCode}
        onChange={handleEditorChange}
        style={{ height: '70vh' }}
      />

      <Container sx={{ borderTop: '.1px solid black' }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <FolderSharpIcon style={{ cursor: 'pointer' }} onClick={handleFolderOpenButton} />
          <RestartAltSharpIcon style={{ cursor: 'pointer' }} onClick={handleResetButton} />
          <ContentCopyOutlinedIcon style={{ cursor: 'pointer' }} onClick={handleCopyButton} />
          <FileDownloadOutlinedIcon style={{ cursor: 'pointer' }} onClick={handleDownloadButton} />
        </Box>

        <Box sx={{ display: 'flex', gap: 3 }}>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <ActionButton onClick={handleRunButton}>실행</ActionButton>
            <ActionButton onClick={handleGradeButton}>채점</ActionButton>
          </Box>

          <ActionButton style={{ backgroundColor: '#409BFF' }} onClick={handleSubmitButton}>
            제출
          </ActionButton>
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
  padding: 9px 20px;
`;

const Label = styled(Box)`
  background-color: ${(props) => (props.focus ? '#8faccd' : '#53769d')};
  width: auto;
  height: auto;
  padding: 0 1rem;
  margin: 0 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: #8faccd;
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
