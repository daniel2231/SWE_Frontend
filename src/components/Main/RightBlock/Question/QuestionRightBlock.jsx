import * as React from 'react';
import styled from '@emotion/styled';
import { Box } from '@mui/material';

const QuestionRightBlock = () => {
  return <Title>실행 결과</Title>;
};

const Title = styled(Box)`
  background-color: #53769d;
  padding: 10px 20px;
  color: white;
  font-size: 20px;
  font-weight: bold;
  border-bottom: 1px solid #f2f2f2;
`;

export default QuestionRightBlock;
