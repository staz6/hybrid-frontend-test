import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import renderRoutes from './renderRoutes';
import routes from './routes';
import { createTheme } from '@mui/material';
const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
  },
  palette: {
    primary:{
      main:"#206ECFF",
      secondary:"#fff",
      sub:"#1F2024",
    },
    
  },
  
});
const App = () => {

  return (
    <ThemeProvider theme={theme}>
    {renderRoutes(routes)}
    </ThemeProvider>
  );
};

export default App;
