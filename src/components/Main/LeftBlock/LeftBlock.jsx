import * as React from 'react';
import { Box } from '@mui/material';
import styled from '@emotion/styled';

import Title from './Title';
import SubTitle from './SubTitle';
import Content from './Content';
import TestcaseContent from './TestcaseContent';
import TestSuccessContext from '../../../context/TestSuccessContext';

const testQuestion =
  '피보나치 수는 0과 1로 시작하며, 다음 피보나치 수는 바로 앞의 두 피보나치 수의 합이 된다. n = 0, 1...에 해당하는 피보나치 수는 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...이다. n번째 피보나치 수를 리턴하시오.';

const testConstraint = ['0 <= n <= 80', '리턴 타입이 int가 아니라는 것에 유의'];

// input: 임시, 아마 채점 버튼 눌렀을 때 context로 가져와야 되지 않을까
// output: 테스트케이스의 올바른 output
const testcase = [
  { title: '테스트케이스 1', input: 'solution(0)', output: 0 },
  { title: '테스트케이스 2', input: 'solution(2)', output: 2 },
  { title: '테스트케이스 3', input: 'solution(2)', output: 2 },
  { title: '테스트케이스 4', input: 'solution(2)', output: 2 }
];

const LeftBlock = () => {
  const [testResult, setTestResult] = React.useState(false);
  const value = React.useMemo(
    () => ({
      testResult,
      setTestResult
    }),
    [testResult, setTestResult]
  );
  return (
    <Container>
      <Title title="문제 & 참조/제약사항" />
      <Content content={testQuestion} />
      <Content content={testConstraint} />

      <Title title="테스트케이스" />

      <TestcaseContainer>
        {testcase.map((item) => (
          <TestSuccessContext.Provider value={value}>
            <SubTitle subTitle={item.title} output={item.output} />
            <TestcaseContent input={item.input} output={item.output} />
          </TestSuccessContext.Provider>
        ))}
      </TestcaseContainer>
    </Container>
  );
};

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100%;
  
`;

const TestcaseContainer = styled(Box)`
  overflow-x: hidden;
  background-color: #263747;
  color: white;
  height: 40vh;
 
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
export default LeftBlock;
