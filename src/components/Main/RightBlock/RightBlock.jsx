import * as React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import styled from '@emotion/styled';
import FunctionTest from './Result/FunctionTest';
import EfficiencyTest from './Result/EfficiencyTest';
import ReadabilityTest from './Result/ReadabilityTest';

const RightBlock = (props) => {
  const donutData = [
    { title: '기능', value: 1, color: '#00B0F0' },
    { title: '효율', value: 25, color: '#92D050' },
    { title: '가독성 ', value: 15, color: '#FFC000' }
  ];

  const totalScore = donutData.map((item) => item.value).reduce((prev, curr) => prev + curr, 0);

  return (
    <Container>
      <Title>채점 결과</Title>
      <ContentBox>
        <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>
          최종성적: {totalScore}점
        </Typography>
        <Grid container spacing={8}>
          <Grid item xs={6}>
            <ScoreLabelContainer>
              <Box>
                {donutData.map((item) => (
                  <LabelText>{item.title}</LabelText>
                ))}
              </Box>
              <Box>
                {donutData.map((item) => (
                  <LabelText>{item.value}</LabelText>
                ))}
              </Box>
            </ScoreLabelContainer>
            <Box sx={{ marginLeft: '1rem' }}>
              <Box sx={{ display: 'flex', flexDirection: 'row', gap: '2rem', padding: '5px' }}>
                <LabelText style={{ color: 'red' }}>표절율</LabelText>
                <LabelText style={{ color: 'red' }}>{props.resultData.copy} %</LabelText>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ContentBox>

      <SubTitle>기능 테스트</SubTitle>
      <FunctionTest data={props.resultData} />

      <SubTitle>효율성 테스트</SubTitle>
      <EfficiencyTest data={props.resultData}/>

      <SubTitle>가독성 테스트</SubTitle>
      <ReadabilityTest data={props.resultData}/>
    </Container>
  );
};

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100%;
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

const ContentBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  background-color: #263747;
  padding: 10px 20px;
  color: white;
  border-bottom: 1px solid black;
  height: 34vh;
  font-size: 14px;
`;

const Title = styled(Box)`
  background-color: #263747;
  padding: 10px 20px;
  color: white;
  font-size: 20px;
  font-weight: bold;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  border-right: 1px solid black;
`;
const SubTitle = styled(Box)`
  background-color: #8faccd;
  padding: 3px 20px;
  border-bottom: 1px solid black;
  letter-spacing: -2px;
`;

const ScoreLabelContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: fit-content;
  margin-top: 1rem;
  margin-left: 1rem;
  font-size: 20px;
  padding: 5px;
  border-bottom: 1px solid black;
`;

const LabelText = styled(Typography)`
  text-align: center;
  font-size: 18px;
  padding: 5px;
  letter-spacing: -1px;
`;

export default RightBlock;
