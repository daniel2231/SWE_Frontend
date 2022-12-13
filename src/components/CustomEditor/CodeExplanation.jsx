import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

const CodeExplanation = (props) => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState([]);
  const payload = {
    model: 'code-davicii-002',
    prompt: props.myCode,
    temperature: 0.5,
    n: 1,
    max_tokens: 64,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop: ['"""']
  };

  const getRes = () => {
    setLoading(true);
    axios({
      method: 'POST',
      url: 'https://api.openai.com/v1/completions',
      data: payload,
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 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'
      }
    })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        setLoading(false);
        console.log(e.message, e);
        setResponse(e.message)
      });
  };

  useEffect(() => {
    getRes();
  }, []);

  return (
    <ContentContainer>
      <Title>AI가 분석한 코드 내용은 다음과 같습니다.</Title>
      <Content>
        {loading ? '로딩중...' : response}
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
