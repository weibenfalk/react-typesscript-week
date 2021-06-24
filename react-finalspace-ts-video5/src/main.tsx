import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Context Provider
import CharacterIdProvider from './context';

ReactDOM.render(
  <React.StrictMode>
    <CharacterIdProvider>
      <App />
    </CharacterIdProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
