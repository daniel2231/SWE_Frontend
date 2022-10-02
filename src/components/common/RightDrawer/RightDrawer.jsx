import React from 'react';

import Drawer from '@mui/material/Drawer';
import ToggleBtn from './ToggleBtn';

const RightDrawer = () => {
  const [state, setState] = React.useState({
    right: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  return (
    <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
      <ToggleBtn />
    </Drawer>
  );
};

export default RightDrawer;
