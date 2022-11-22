import React from 'react';
import styled from '@emotion/styled';
import ResponsiveAppBar from '../components/common/Appbar/Appbar';
import ResultEditor from '../components/CustomEditor/ResultEditor';
// import ScoreBlock from '../components/Main/RightBlock/Result/ScoreBlock';
import RightBlock from '../components/Main/RightBlock/RightBlock';
import Test from '../components/Main/RightBlock/test';

const Result = () => {
  return (
    <MainWrapper>
      <ResponsiveAppBar menuDisplay />
      <MainContainer>
        <ColumnContainer>
          <RightBlock />
          <ResultEditor />
        </ColumnContainer>
      </MainContainer>
      <Test />
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
