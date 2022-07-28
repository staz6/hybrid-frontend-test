import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import renderRoutes from './renderRoutes';
import routes from './routes';

const App = () => {

  return (
    <>
    {renderRoutes(routes)}
    </>
  );
};

export default App;
