import React from 'react';

const ReturnErrorContext = React.createContext({
  returnError: 0,
  setReturnError: () => {}
});

export default ReturnErrorContext;
