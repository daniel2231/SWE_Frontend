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
  height: 100vh;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #b2c0cc;
    /* 스크롤바 둥글게 설정    */
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
  grid-template-columns: 1fr 3fr;
  border-left: 1px solid black;
  height: 100%;
`;

export default Questions;
