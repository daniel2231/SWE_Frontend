import React from 'react';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import ResponsiveAppBar from '../components/common/Appbar/Appbar';
import CustomEditor from '../components/CustomEditor/CustomEditor';
import LeftBlock from '../components/Main/LeftBlock/LeftBlock';
import ReturnValueContext from '../context/ReturnValueContext';
import ReturnErrorContext from '../context/ReturnErrorContext';
import CurrentCodeLabelNumberContext from '../context/CurrentCodeLabelNumberContext';
import TestcaseResultsContext from '../context/TestcaseResultsContext';



const Questions = () => {
  const { id } = useParams();
  const [contentValue, setContentValue] = React.useState('');
  const [skeletonCodeValue, setSkeletonCodeValue] = React.useState('');
  const [problemNameValue, setProblemNameValue] = React.useState('');
  const [problemRestrictionValue, setProblemRestrictionValue] = React.useState('');
  const [returnValue, setReturnValue] = React.useState('');

  const [testCaseArray, setTestCaseArray] = React.useState([]);

  React.useEffect(() => {
    Promise.all([
      fetch(`http://127.0.0.1:8000/questions/${id}/`),
      fetch(`http://127.0.0.1:8000/unittests/${id}/`)
    ])

      .then(([resData, resUnittest]) => Promise.all([resData.json(), resUnittest.json()]))
      .then(([resData, resUnittest]) => {
        setContentValue(resData[0].problem_content);
        setSkeletonCodeValue(resData[0].skeleton_code);
        setProblemNameValue(resData[0].problem_name);
        setProblemRestrictionValue(resData[0].problem_restrictions);
        setTestCaseArray(resUnittest);
      });
  }, []);

  const returnValueValue = React.useMemo(
    () => ({
      returnValue,
      setReturnValue
    }),
    [returnValue, setReturnValue]
  );

  const [testcaseResult, setTestcaseResult] = React.useState([]);
  /* eslint-disable */
  const value = { testcaseResult, setTestcaseResult };

  const [returnError, setReturnError] = React.useState('');
  const returnErrorValue = React.useMemo(
    () => ({
      returnError,
      setReturnError
    }),
    [returnError, setReturnError]
  );
  const [currentCodeLabelNumber, setCurrentCodeLabelNumber] = React.useState(1);
  const currentCodeLabelNumberValue = React.useMemo(
    () => ({
      currentCodeLabelNumber,
      setCurrentCodeLabelNumber
    }),
    [currentCodeLabelNumber, setCurrentCodeLabelNumber]
  );

  return (
    <ReturnValueContext.Provider value={returnValueValue}>
      <ReturnErrorContext.Provider value={returnErrorValue}>
        <CurrentCodeLabelNumberContext.Provider value={currentCodeLabelNumberValue}>
          <TestcaseResultsContext.Provider value={value}>
            <ResponsiveAppBar menuDisplay />

            <MainContainer>
              <LeftBlock
                content={contentValue}
                problemName={problemNameValue}
                restrictions={problemRestrictionValue}
                testcase={testCaseArray}
              />
              <CustomEditor skeletonCode={skeletonCodeValue} />
            </MainContainer>
          </TestcaseResultsContext.Provider>
        </CurrentCodeLabelNumberContext.Provider>
      </ReturnErrorContext.Provider>
    </ReturnValueContext.Provider>
  );
};

// const MainWrapper = styled.div`
//   height: 100vh;
//   background-color: #263747;
//   overflow: scroll;
//   &::-webkit-scrollbar {
//     width: 8px;
//   }
//   &::-webkit-scrollbar-thumb {
//     background-color: #b2c0cc;
//     border-radius: 10px;
//   }
//   &::-webkit-scrollbar-track {
//     background-color: #263747;
//   }
// `;

const MainContainer = styled.div`
  margin-top: 69px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  height: 100%;
  overflow: hidden;
`;

// const ColumnContainer = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 3fr;
//   border-left: 1px solid black;
//   width: 100%;
//   height: 80vh;
//   background-color: yellow;
// `;

export default Questions;
