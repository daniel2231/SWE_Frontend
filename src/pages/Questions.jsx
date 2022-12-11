import React from 'react';
import styled from '@emotion/styled';
import ResponsiveAppBar from '../components/common/Appbar/Appbar';
import CustomEditor from '../components/CustomEditor/CustomEditor';
import LeftBlock from '../components/Main/LeftBlock/LeftBlock';
import ReturnValueContext from '../context/ReturnValueContext';
import ReturnErrorContext from '../context/ReturnErrorContext';
import CurrentCodeLabelNumberContext from '../context/CurrentCodeLabelNumberContext';

const Questions = () => {
  const [returnValue, setReturnValue] = React.useState('');
  const returnValueValue = React.useMemo(
    () => ({
      returnValue,
      setReturnValue
    }),
    [returnValue, setReturnValue]
  );

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
          <ResponsiveAppBar menuDisplay />

          <MainContainer>
            <LeftBlock />
            <CustomEditor />
          </MainContainer>
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
