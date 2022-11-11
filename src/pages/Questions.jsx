import React from 'react';
import styled from '@emotion/styled';
import ResponsiveAppBar from '../components/common/Appbar/Appbar';
import CustomEditor from '../components/CustomEditor/CustomEditor';
import LeftBlock from '../components/Main/LeftBlock/LeftBlock';
import ReturnValueContext from '../context/ReturnValueContext';

const Questions = () => {
  const [returnValue, setReturnValue] = React.useState('');
  const value = React.useMemo(
    () => ({
      returnValue,
      setReturnValue
    }),
    [returnValue, setReturnValue]
  );
  return (
    <ReturnValueContext.Provider value={value}>
      <MainWrapper>
        <ResponsiveAppBar menuDisplay />
        <MainContainer>
          <ColumnContainer>
            <LeftBlock />
            <CustomEditor />
          </ColumnContainer>
        </MainContainer>
      </MainWrapper>
    </ReturnValueContext.Provider>
  );
};

const MainWrapper = styled.div`
  height: 90vh;
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

export default Questions;
