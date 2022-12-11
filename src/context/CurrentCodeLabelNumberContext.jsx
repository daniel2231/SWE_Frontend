import React from 'react';

const CurrentCodeLabelNumberContext = React.createContext({
  currentCodeLabelNumber: 1,
  setCurrentCodeLabelNumber: () => {}
});

export default CurrentCodeLabelNumberContext;
