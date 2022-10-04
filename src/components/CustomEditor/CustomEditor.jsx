import React from 'react';

import Editor from '@monaco-editor/react';
import styled from '@emotion/styled';

const CustomEditor = () => {
  return (
    <>
      <Editor defaultLanguage="javascript" defaultValue="// 코드를 입력하세요." />
      <CustomFooter>
        <p>Footer</p>
        <p>Footer</p>
      </CustomFooter>
    </>
  );
};

const CustomFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  background-color: #f5f5f5;
`;

export default CustomEditor;
