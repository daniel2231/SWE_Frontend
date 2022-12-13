import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Home from './pages/Home';
import Questions from './pages/Questions';
import Result from './pages/Result';

import ThemeContext from './context/ThemeContext';

const App = () => {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      }
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#111E28',
            contrastText: 'rgba(255,255,255,0.87)'
          },
          secondary: {
            main: '#d4af37',
            contrastText: 'rgba(0,0,0,0.87)'
          }
        },
        typography: {
          fontFamily: '"Noto Sans KR", sans-serif',
          fontWeightLight: 300,
          fontWeightRegular: 500,
          fontWeightBold: 700
        }
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questions/:id" element={<Questions />} />
          <Route path="/result/:id" element={<Result />} />
        </Routes>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
