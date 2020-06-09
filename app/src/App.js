import React from 'react';
import { Provider } from 'react-redux';

import './config/ReactotroConfig';
import Store from './store';
import Routes from './routes';


function App() {
  return (
    <Provider store={Store}>
      <Routes />
    </Provider>
  );
}

export default App;
