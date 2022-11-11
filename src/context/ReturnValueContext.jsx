import React from 'react';

const ReturnValueContext = React.createContext({
  returnValue: 0,
  setReturnValue: () => {}
});

export default ReturnValueContext;
