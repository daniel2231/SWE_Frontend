import React from 'react';

import styled from '@emotion/styled';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import ResponsiveAppBar from '../components/common/Appbar/Appbar';
import HomeBox from '../components/Home/HomeBox';
import HomeCard from '../components/Home/HomeCard';

const Home = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Container>
        <MainContainer>
          <HomeBox
            title="안녕하세요, 👋"
            content="다양한 알고리즘 문제를 통해 문제해결능력을 길러보세요."
          />

          <HomeBox
            title="지금 시작해보세요!"
            content="최근 많은 유저들이 도전하고 있는 단계입니다."
          />
          <Grid
            container
            rowSpacing={{ xs: 2, sm: 2, md: 0, lg: 0 }}
            columnSpacing={{ xs: 0, sm: 0, md: 2, lg: 2 }}
            maxWidth="lg"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Grid item xs={8} sm={8} md={4} lg={4}>
              <HomeCard circleTitle="초급" stepTitle="초급 1단계" linkTo="/" />
            </Grid>
            <Grid item xs={8} sm={8} md={4} lg={4}>
              <HomeCard circleTitle="중급" stepTitle="중급 1단계" linkTo="/" />
            </Grid>
            <Grid item xs={8} sm={8} md={4} lg={4}>
              <HomeCard circleTitle="고급" stepTitle="고급 1단계" linkTo="/" />
            </Grid>
          </Grid>
        </MainContainer>
      </Container>
    </>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  padding: 160px 20%;
  height: 100vh;
`;

export default Home;
