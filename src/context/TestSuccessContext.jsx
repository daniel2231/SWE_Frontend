import * as React from 'react';

const TestSuccessContext = React.createContext({
  yourOutput: '',
  setYourOutput: () => {},
  testSuccess: false,
  setTestSuccess: () => {}
});

export default TestSuccessContext;
