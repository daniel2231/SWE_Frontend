import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import ResponsiveAppBar from '../components/common/Appbar/Appbar';
import ResultEditor from '../components/CustomEditor/ResultEditor';

// import ScoreBlock from '../components/Main/RightBlock/Result/ScoreBlock';
import RightBlock from '../components/Main/RightBlock/RightBlock';

// key: label number(1, 2, 3)
// value: json-string format
function getItem(key) {
  const value = localStorage.getItem(key);
  if (!value) return null;
  return JSON.parse(value);
}

const Result = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const [resultData, setResultData] = React.useState([]);
  const [questionData, setQuestionData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [myCode] = React.useState(getItem(state.currentCodeLabelNumber));
  useEffect(() => {
    Promise.all([
      fetch(`http://127.0.0.1:8000/result/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          code_submitted: myCode
        })
      }),
      fetch(`http://127.0.0.1:8000/questions/${id}/`)
    ])
      .then(([resData, resAns]) => Promise.all([resData.json(), resAns.json()]))
      .then(([resData, resAns]) => {
        console.log(resData);
        setResultData(resData);
        setQuestionData(resAns[0]);
      })
      .then(() => {
        setLoading(false);
      });
  }, []);

  return (
    <MainWrapper>
      <ResponsiveAppBar menuDisplay />
      <MainContainer>
        <ColumnContainer>
          {loading ? (
            <div>loading...</div>
          ) : (
            <>
              <RightBlock resultData={resultData} />
                <ResultEditor ansCode={questionData} myCode={myCode} />
            </>
          )}
        </ColumnContainer>
      </MainContainer>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  height: 100vh;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #b2c0cc;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: #263747;
  }
`;

const MainContainer = styled.div`
  padding-top: 69px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 100%;
`;
const ColumnContainer = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 3.5fr;
  border-left: 1px solid black;
  height: 100%;
`;

export default Result;
