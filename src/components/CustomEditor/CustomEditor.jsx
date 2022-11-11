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
import Title from '../Main/LeftBlock/Title';
import Pyodide from '../../utils/Pyodide';
import ReturnValueContext from '../../context/ReturnValueContext';
import useConfirm from '../../utils/useConfirm';

const skeletonCode = `def solution(n):
  print(n)
solution(1)
`;
const saveLabelNumber = [1, 2, 3];

const CustomEditor = () => {
  const [currentLabel, setCurrentLabel] = React.useState(1);
  const handleCurrentLabel = (number) => {
    setCurrentLabel(number);
  };

  const [saveContent, setSaveContent] = React.useState({
    1: getItem(1) || skeletonCode,
    2: getItem(2) || skeletonCode,
    3: getItem(3) || skeletonCode
  });

  React.useEffect(() => {
    // setItem(currentLabel, saveContent[currentLabel]);

    setSaveContent((prev) => ({
      ...prev,
      [currentLabel]: getItem(currentLabel)
    }));
  }, [currentLabel]);

  const handleEditorChange = (value) => {
    setSaveContent((prev) => ({
      ...prev,
      [currentLabel]: value
    }));
    setTimeout(() => {
      setItem(currentLabel, saveContent[currentLabel]);
    }, 1000);
  };

  const handleSaveButton = () => {
    setItem(currentLabel, saveContent[currentLabel]);
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

  const handleResetButton = () => {
    setSaveContent((prev) => ({
      ...prev,
      [currentLabel]: skeletonCode
    }));
    setItem(currentLabel, skeletonCode);
  };

  const handleCopyButton = () => {
    window.navigator.clipboard.writeText(saveContent[currentLabel]).then(() => {
      alert('복사 완료');
    });
  };

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

  const returnValue = React.useContext(ReturnValueContext);

  const handleRunButton = () => {
    Pyodide(getItem(currentLabel), returnValue);
  };
  const handleGradeButton = () => {};

  const onConfirm = () => {
    navigate('/result', { state: { currentLabel } });
  };
  const handleSubmitButton = () => {
    useConfirm('제출하시겠습니까?', onConfirm);
  };

  return (
    <BigContainer>
      <TitleButtonBar>
        <Typography sx={{ fontSize: '20px', fontWeight: 'bold', letterSpacing: '-2px' }}>
          코드 입력
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 3, alignItems: 'center' }}>
          <FolderSharpIcon style={{ cursor: 'pointer' }} onClick={handleFolderOpenButton} />
          <RestartAltSharpIcon style={{ cursor: 'pointer' }} onClick={handleResetButton} />
          <ContentCopyOutlinedIcon style={{ cursor: 'pointer' }} onClick={handleCopyButton} />
          <FileDownloadOutlinedIcon style={{ cursor: 'pointer' }} onClick={handleDownloadButton} />

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

          <SaveOutlinedIcon sx={{ cursor: 'pointer' }} onClick={handleSaveButton} />
        </Box>
      </TitleButtonBar>

      <Editor
        height="49vh"
        defaultLanguage="python"
        value={saveContent[currentLabel] || skeletonCode}
        onChange={handleEditorChange}
        theme="vs-dark"
      />

      <Title title="실행 결과" />
      <Terminal>
        {returnValue.returnValue ? (
          <Typography sx={{ fontSize: '15px', color: 'white' }}>
            Terminal &gt;&gt; python solution.py <br />
            <br />
            {returnValue.returnValue.map((value) => (
              <Typography>{value}</Typography>
            ))}
          </Typography>
        ) : (
          <Typography sx={{ fontSize: '15px', color: '#78909C', letterSpacing: '-1px' }}>
            실행 결과가 여기에 표시됩니다.
          </Typography>
        )}
      </Terminal>

      <BottomBar>
        <Box sx={{ display: 'flex', gap: 3 }}>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <ActionButton onClick={handleRunButton}>터미널 실행</ActionButton>
            <ActionButton onClick={handleGradeButton}>테스트케이스 채점</ActionButton>
          </Box>

          <ActionButton style={{ backgroundColor: '#409BFF' }} onClick={handleSubmitButton}>
            제출
          </ActionButton>
        </Box>
      </BottomBar>
    </BigContainer>
  );
};

const BigContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100;
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

const Label = styled(Box)`
  background-color: ${(props) => (props.focus ? '#8faccd' : '#53769d')};
  width: auto;
  height: auto;
  padding: 0 1rem;
  cursor: pointer;
  &:hover {
    background-color: #8faccd;
  }
`;

const Terminal = styled(Box)`
  background-color: #263747;
  padding: 10px 20px;
  color: white;
  border-bottom: 1px solid black;
  height: 20vh;
  overflow: auto;
`;
const BottomBar = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
  background-color: #263747;
  padding: 10px 20px;
  border-bottom: 1px solid black;
  width: 100%;
`;
const ActionButton = styled(Button)`
  font-size: 14px;
  font-weight: bold;
  letter-spacing: -1px;
  border-radius: 1rem;
  background-color: #c6d0db;
  padding: 0px 10px;
  &:hover {
    color: white;
    background-color: #46515f;
  }
`;

export default CustomEditor;
