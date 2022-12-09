import * as React from 'react';
import { Box } from '@mui/material';
import styled from '@emotion/styled';
import Title from './Title';
import TestcaseBlock from './TestcaseBlock';
import Content from './Content';

const testQuestion =
  '피보나치 수는 0과 1로 시작하며, 다음 피보나치 수는 바로 앞의 두 피보나치 수의 합이 된다. n = 0, 1...에 해당하는 피보나치 수는 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...이다. n번째 피보나치 수를 리턴하시오.';

const testConstraint = ['0 <= n <= 80', '리턴 타입이 int가 아니라는 것에 유의'];

// input: 임시, 아마 채점 버튼 눌렀을 때 context로 가져와야 되지 않을까
// output: 테스트케이스의 올바른 output
const testcase = [
  { title: '테스트케이스 1', input: '0', output: 0 },
  { title: '테스트케이스 2', input: '2', output: 2 },
  { title: '테스트케이스 3', input: '3', output: 3 },
  { title: '테스트케이스 4', input: '4', output: 4 }
];

const LeftBlock = () => {
  return (
    <Container>
      <ContentContainer>
        <Title title="문제 & 참조/제약사항" />
        <QuestionContainer>
          <Content content={testQuestion} />
          <Content content={testConstraint} />
        </QuestionContainer>
      </ContentContainer>

      <ContentContainer>
        <Title title="테스트케이스" />
        <TestcaseContainer>
          {testcase.map((item) => (
            <TestcaseBlock subTitle={item.title} input={item.input} output={item.output} />
          ))}
        </TestcaseContainer>
      </ContentContainer>
    </Container>
  );
};

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #263747;
`;

const ContentContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const QuestionContainer = styled(Box)`
  background-color: #263747;
  color: white;
  padding-bottom: 15px;
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

const TestcaseContainer = styled(Box)`
  overflow-x: hidden;
  background-color: #263747;
  color: white;
  overflow-y: auto;
  height: 350px;
  min-height: 417px;
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
