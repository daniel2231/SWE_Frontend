import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import React from 'react';

const ReferenceContent = () => {
  const videoList = [
    { title: '[자료구조 알고리즘] 피보나치수열의 시간복잡도', link: 'https://www.naver.com' },
    {
      title: '동적 프로그래밍 피보나치 수열 강좌(Dynamic Programming Fibonacci Sequence)',
      link: 'https://www.naver.com'
    }
  ];

  const questionList = [
    { title: '04_ 피보나치 수열 및 여러 문제들(hard)', link: 'https://www.naver.com' },
    { title: '1047 : 피보나치수열1', link: 'https://www.naver.com' }
  ];

  const studyList = [
    { title: '피보나치 수열 알고리즘을 해결하는 5가지 방법', link: 'https://www.naver.com' },
    {
      title: '28. 피보나치 수열( 재귀, 동적 프로그래밍, 반복) 모든 방식 알고리즘',
      link: 'https://www.naver.com'
    }
  ];
  return (
    <>
      <ContentContainer>
        <Title>영상 추천</Title>
        {videoList.map((item) => (
          <ListContent
            onClick={() => {
              window.open(`${item.link}`, '_blank');
            }}
          >
            {item.title}
          </ListContent>
        ))}
      </ContentContainer>
      <ContentContainer>
        <Title>문제 추천</Title>
        {questionList.map((item) => (
          <ListContent
            onClick={() => {
              window.open(`${item.link}`, '_blank');
            }}
          >
            {item.title}
          </ListContent>
        ))}
      </ContentContainer>
      <ContentContainer>
        <Title>학습 자료 추천</Title>
        {studyList.map((item) => (
          <ListContent
            onClick={() => {
              window.open(`${item.link}`, '_blank');
            }}
          >
            {item.title}
          </ListContent>
        ))}
      </ContentContainer>
    </>
  );
};

const ContentContainer = styled(Box)`
  padding: 1rem 1rem;
`;

const Title = styled(Typography)`
  font-weight: bold;
  font-size: 17px;
`;

const ListContent = styled.li`
  font-size: 14px;
  padding: 0rem 1rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export default ReferenceContent;
