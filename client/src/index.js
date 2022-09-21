import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserLib from './booklib/UserLib';

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={
    {
      user: new UserLib()
    }
  }>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context.Provider>
);