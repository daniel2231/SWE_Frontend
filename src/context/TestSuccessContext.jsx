import * as React from 'react';

const TestSuccessContext = React.createContext({
  testResult: false,
  setTestResult: () => {}
});

export default TestSuccessContext;
