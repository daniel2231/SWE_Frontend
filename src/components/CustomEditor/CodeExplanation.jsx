import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import React from 'react';

const CodeExplanation = () => {
  const explainContent = 'The code prints the number 3 three times.';

  return (
    <ContentContainer>
      <Title>AI가 분석한 코드 내용은 다음과 같습니다.</Title>
      <Content>
        {explainContent.split('\n\n').map((item) => (
          <p>{item}</p>
        ))}
      </Content>
    </ContentContainer>
  );
};

const ContentContainer = styled(Box)`
  padding: 1rem 1rem;
`;

const Title = styled(Typography)`
  font-weight: bold;
  font-size: 17px;
  margin-bottom: 5px;
`;

const Content = styled.div`
  font-size: 15px;
  position: relative;
  margin: 20px;
  width: 400px;
  height: 50px;
  background: #8faccd;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: left;
  padding-left: 20px;

  ::after {
    border-top: 15px solid #8faccd;
    border-left: 15px solid transparent;
    border-right: 0px solid transparent;
    border-bottom: 0px solid transparent;
    content: '';
    position: absolute;
    top: 10px;
    left: -15px;
  }
`;

export default CodeExplanation;
