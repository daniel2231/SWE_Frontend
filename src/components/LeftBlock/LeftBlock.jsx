import * as React from 'react';
import { Box } from '@mui/material';
import styled from '@emotion/styled';

import Title from './Title';
import SubTitle from './SubTitle';
import Content from './Content';
import TestcaseContent from './TestcaseContent';
import TestSuccessContext from '../../context/TestSuccessContext';

const testQuestion =
  '피보나치 수는 0과 1로 시작하며, 다음 피보나치 수는 바로 앞의 두 피보나치 수의 합이 된다. n = 0, 1...에 해당하는 피보나치 수는 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...이다. n번째 피보나치 수를 리턴하시오.';

const testConstraint = ['0 <= n <= 80', '리턴 타입이 int가 아니라는 것에 유의'];

const testcase = [
  { title: '테스트케이스 1', success: true, input: 'solution(0)', output: 2 },
  { title: '테스트케이스 2', success: false, input: 'solution(2)', output: 2 },
  { title: '테스트케이스 3', success: false, input: 'solution(2)', output: 2 },
  { title: '테스트케이스 4', success: false, input: 'solution(2)', output: 2 }
];
const LeftBlock = () => {
  return (
    <>
      <Title title="문제 & 참조/제약사항" />
      <SubTitle subTitle="문제" />
      <Content content={testQuestion} />
      <SubTitle subTitle="참조/제약사항" />
      <Content content={testConstraint} />

      <Title title="테스트케이스" />
      
      <Container>
        {testcase.map((item) => (
          <TestSuccessContext.Provider value={item.success} key={item.title}>
            <SubTitle subTitle={item.title} success={item.success} />
            <TestcaseContent input={item.input} output={item.output} />
          </TestSuccessContext.Provider>
        ))}
      </Container>
    </>
  );
};

const Container = styled(Box)`
  overflow: auto;
`;
export default LeftBlock;
