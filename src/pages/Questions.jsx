import React from 'react';
import styled from '@emotion/styled';
import ResponsiveAppBar from '../components/common/Appbar/Appbar';
import CustomEditor from '../components/CustomEditor/CustomEditor';

const Questions = () => {
  return (
    <MainWrapper>
      <ResponsiveAppBar />
      <MainContainer>
        <ColumnContainer>
          <h1>Home</h1>
          <h3>Test</h3>
        </ColumnContainer>
        <ColumnContainer>
          <CustomEditor />
        </ColumnContainer>
        <ColumnContainer>
          <h1>Home</h1>
          <h3>Test</h3>
        </ColumnContainer>
      </MainContainer>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  height: 100vh;
`;

const MainContainer = styled.div`
  padding-top: 69px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 100%;
`;

const ColumnContainer = styled.div`
  flex: 33.33%;
  display: flex;
  flex-direction: column;
  border-left: 1px solid black;
  height: 100%;
`;

export default Questions;
