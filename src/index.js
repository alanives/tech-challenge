import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';

import { themeOptions } from './styles/theme';

import router from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme(themeOptions);

root.render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>,
);
