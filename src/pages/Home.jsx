import React from 'react';
import styled from '@emotion/styled';
import ResponsiveAppBar from '../components/common/Appbar/Appbar';

const Home = () => {
  return (
    <>
      <ResponsiveAppBar />
      <MainContainer>
        <h1>Home</h1>
        <h3>Test</h3>
      </MainContainer>
    </>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export default Home;
