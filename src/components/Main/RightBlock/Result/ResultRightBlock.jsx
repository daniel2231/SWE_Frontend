import * as React from 'react';
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import FirstContentBox from './FirstMenu/FirstContentBox';
import SecondContentBox from './SecondMenu/SecondContentBox';
import ThirdContentBox from './ThirdMenu/ThirdContentBox';

const ResultRightBlock = () => {
  const [firstMenu, setFirstMenu] = React.useState(true);
  const [secondMenu, setSecondMenu] = React.useState(false);
  const [thirdMenu, setThirdMenu] = React.useState(false);

  const handleMenuClick = (order) => {
    switch (order) {
      case 1:
        setFirstMenu(true);
        setSecondMenu(false);
        setThirdMenu(false);
        break;
      case 2:
        setFirstMenu(false);
        setSecondMenu(true);
        setThirdMenu(false);
        break;
      case 3:
        setFirstMenu(false);
        setSecondMenu(false);
        setThirdMenu(true);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Title
        onClick={() => {
          handleMenuClick(1);
        }}
      >
        제출 결과
      </Title>
      {firstMenu && <FirstContentBox />}
      <Title
        onClick={() => {
          handleMenuClick(2);
        }}
      >
        코드 설명
      </Title>
      {secondMenu && <SecondContentBox />}
      <Title
        onClick={() => {
          handleMenuClick(3);
        }}
      >
        관련 자료
      </Title>
      {thirdMenu && <ThirdContentBox />}
    </>
  );
};

const Title = styled(Box)`
  background-color: #53769d;
  padding: 10px 20px;
  color: white;
  font-size: 20px;
  font-weight: bold;
  border-bottom: 1px solid #f2f2f2;
  cursor: pointer;
`;

export default ResultRightBlock;
