import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

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
import ReturnErrorContext from '../../context/ReturnErrorContext';
import useConfirm from '../../utils/useConfirm';
import CurrentCodeLabelNumberContext from '../../context/CurrentCodeLabelNumberContext';
import TestcaseResultsContext from '../../context/TestcaseResultsContext';

const saveLabelNumber = [1, 2, 3];

const CustomEditor = (props) => {
  const { id } = useParams();
  const currentCodeLabelNumberValue = React.useContext(CurrentCodeLabelNumberContext);

  const [saveContent, setSaveContent] = React.useState({
    1: getItem(1) || props.skeletonCode,
    2: getItem(2) || props.skeletonCode,
    3: getItem(3) || props.skeletonCode
  });

  React.useEffect(() => {
    // setItem(currentLabel, saveContent[currentLabel]);

    setSaveContent((prev) => ({
      ...prev,
      [currentCodeLabelNumberValue.currentCodeLabelNumber]: getItem(
        currentCodeLabelNumberValue.currentCodeLabelNumber
      )
    }));
  }, [currentCodeLabelNumberValue.currentCodeLabelNumber]);

  const handleEditorChange = (value) => {
    setSaveContent((prev) => ({
      ...prev,
      [currentCodeLabelNumberValue.currentCodeLabelNumber]: value
    }));
    setTimeout(() => {
      setItem(
        currentCodeLabelNumberValue.currentCodeLabelNumber,
        saveContent[currentCodeLabelNumberValue.currentCodeLabelNumber]
      );
    }, 1000);
  };

  const handleSaveButton = () => {
    setItem(
      currentCodeLabelNumberValue.currentCodeLabelNumber,
      saveContent[currentCodeLabelNumberValue.currentCodeLabelNumber]
    );
    alert('저장 완료');
  };

  const DisplayFileContent = (file) => {
    const fr = new FileReader();
    fr.readAsText(file, 'UTF-8');
    fr.onload = () => {
      setSaveContent((prev) => ({
        ...prev,
        [currentCodeLabelNumberValue.currentCodeLabelNumber]: fr.result
      }));
      setItem(currentCodeLabelNumberValue.currentCodeLabelNumber, fr.result);
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
      [currentCodeLabelNumberValue.currentCodeLabelNumber]: props.skeletonCode
    }));
    setItem(currentCodeLabelNumberValue.currentCodeLabelNumber, props.skeletonCode);
  };

  const handleCopyButton = () => {
    window.navigator.clipboard
      .writeText(saveContent[currentCodeLabelNumberValue.currentCodeLabelNumber])
      .then(() => {
        alert('복사 완료');
      });
  };

  const handleDownloadButton = () => {
    // Blob 생성자: 파일로 만들고자 하는것, 그것의 타입
    const blob = new Blob([saveContent[currentCodeLabelNumberValue.currentCodeLabelNumber]], {
      type: 'text/plain'
    });

    // Blob 객체를 나타내는 다운로드 url 생성
    const url = window.URL.createObjectURL(blob);

    // 다운로드 기능만 수행하는 a 태그 생성
    const a = document.createElement('a');
    a.href = url;
    a.download = `file${currentCodeLabelNumberValue.currentCodeLabelNumber}.py`;
    a.click();

    // 태그 및 url 삭제: 메모리 누수 방지
    a.remove();
    window.URL.revokeObjectURL(url);
  };

  const returnValue = React.useContext(ReturnValueContext);
  const returnError = React.useContext(ReturnErrorContext);
  const { setTestcaseResult } = React.useContext(TestcaseResultsContext);

  const handleRunButton = () => {
    Pyodide(getItem(currentCodeLabelNumberValue.currentCodeLabelNumber), returnValue, returnError);
  };

  const handleGradeButton = () => {
    console.log(saveContent[currentCodeLabelNumberValue.currentCodeLabelNumber]);
    fetch(`http://127.0.0.1:8000/unittests/result/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        option: 0,
        code_submitted: saveContent[currentCodeLabelNumberValue.currentCodeLabelNumber]
      })
    })
      .then((res) => res.json())
      .then((res) => {
        setTestcaseResult(res.unittest_result);
      });
  };

  const navigate = useNavigate();
  const onConfirm = () => {
    navigate('/result/1', {
      state: { currentCodeLabelNumber: currentCodeLabelNumberValue.currentCodeLabelNumber }
    });
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
              focus={currentCodeLabelNumberValue.currentCodeLabelNumber === item}
              onClick={() => {
                currentCodeLabelNumberValue.setCurrentCodeLabelNumber(item);
              }}
              sx={{
                borderRadius:
                  currentCodeLabelNumberValue.currentCodeLabelNumber === item ? '1rem 0 0 0' : ''
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
        height="100%"
        defaultLanguage="python"
        value={
          saveContent[currentCodeLabelNumberValue.currentCodeLabelNumber] || props.skeletonCode
        }
        onChange={handleEditorChange}
        theme="vs-dark"
        options={{ fontLigatures: true, fontFamily: 'Fira Code', fontSize: '18px' }}
      />

      <ContentContainer>
        <Title title="실행 결과" />
        <Terminal>
          {returnValue.returnValue || returnError.returnError ? (
            <Typography sx={{ fontSize: '15px', color: 'white' }}>
              Terminal &gt;&gt; python solution.py <br />
              <br />
              {returnValue.returnValue &&
                returnValue.returnValue.map((value) => <Typography>{value}</Typography>)}
              {returnError.returnError &&
                returnError.returnError.map((value) => (
                  <Typography sx={{ color: 'red' }}>{value}</Typography>
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
      </ContentContainer>
    </BigContainer>
  );
};

const BigContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100%;
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

const ContentContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Terminal = styled(Box)`
  background-color: #263747;
  padding: 10px 20px;
  color: white;
  border-bottom: 1px solid black;
  height: 68%;
  overflow: auto;
  min-height: 72%;
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
  height: 15%;
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
