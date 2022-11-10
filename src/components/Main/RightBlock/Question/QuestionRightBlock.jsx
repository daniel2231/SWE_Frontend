import * as React from 'react';
// import styled from '@emotion/styled';
// import { Box } from '@mui/material';

import Terminal, { ColorMode } from 'react-terminal-ui';

const QuestionRightBlock = () => {
  // const [terminalLineData, setTerminalLineData] = React.useState([
  //   <TerminalOutput>Welcome to the React Terminal UI Demo!</TerminalOutput>
  // ]);
  // setTerminalLineData(terminalLineData);
  // Terminal has 100% width by default so it should usually be wrapped in a container div
  return (
    <div className="container">
      <Terminal
        name="React Terminal Usage Example"
        colorMode={ColorMode.Light}
        onInput={(terminalInput) => console.log(`New terminal input received: '${terminalInput}'`)}
      >
        {/* {terminalLineData} */}
        Welcome to the React Terminal UI Demo!
      </Terminal>
    </div>
  );
};

// const Title = styled(Box)`
//   background-color: #53769d;
//   padding: 10px 20px;
//   color: white;
//   font-size: 20px;
//   font-weight: bold;
//   border-bottom: 1px solid #f2f2f2;
// `;

export default QuestionRightBlock;
