import * as React from 'react';
import { Box } from '@mui/material';
import styled from '@emotion/styled';
import Title from './Title';
import TestcaseBlock from './TestcaseBlock';
import Content from './Content';
import TestcaseResultsContext from '../../../context/TestcaseResultsContext';

// input: 임시, 아마 채점 버튼 눌렀을 때 context로 가져와야 되지 않을까
// output: 테스트케이스의 올바른 output

const LeftBlock = (props) => {
  const testcaseResult = React.useContext(TestcaseResultsContext);
  console.log(testcaseResult.testcaseResult);

  return (
    <Container>
      <ContentContainer>
        <Title title="문제 & 참조/제약사항" />
        <QuestionContainer>
          <Content content={props.content} />
          <Content content={props.restrictions} />
        </QuestionContainer>
      </ContentContainer>

      <ContentContainer>
        <Title title="테스트케이스" />
        <TestcaseContainer>
          {props.testcase.map((item, idx) => (
            <TestcaseBlock
              key={item.test_id}
              subTitle={item.test_id}
              input={item.test_content}
              output={item.test_answer}
              yourOutput={
                testcaseResult.testcaseResult[idx] === undefined
                  ? false
                  : testcaseResult.testcaseResult[idx]
              }
            />
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
