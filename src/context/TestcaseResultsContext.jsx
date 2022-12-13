import React from 'react';

const TestcaseResultsContext = React.createContext({
  testcaseResult: [],
  setTestcaseResult: () => {}
});

export default TestcaseResultsContext;
