import React from 'react';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';

const Content = ({ content }) => {
  if (typeof content === 'object')
    return (
      <Container>
        {content.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </Container>
    );
  return <Container sx={{minHeight: 250}}>{content}</Container>;
};

const Container = styled(Box)`
  padding: 20px 40px;
  font-size: 14px;
  color: white;
  background-color: #263747;
  border-right: 1px solid black;
  white-space: pre-line;
`;

export default Content;
