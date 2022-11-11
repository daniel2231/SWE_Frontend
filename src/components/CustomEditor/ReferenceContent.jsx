import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import React from 'react';

const ReferenceContent = () => {
  const videoList = [
    { title: 'test Title 1', link: 'https://www.naver.com' },
    { title: 'test Title 2', link: 'https://www.naver.com' }
  ];

  const questionList = [
    { title: 'test Title 1', link: 'https://www.naver.com' },
    { title: 'test Title 2', link: 'https://www.naver.com' }
  ];

  const studyList = [
    { title: 'test Title 1', link: 'https://www.naver.com' },
    { title: 'test Title 2', link: 'https://www.naver.com' }
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
  font-size: 15px;
`;

const ListContent = styled.li`
  font-size: 12px;
  padding: 0rem 1rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export default ReferenceContent;
