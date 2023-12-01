import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App.jsx';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './components/GlogalStyle';

const theme = {
  colors: {
    textLink: '#ffffff',
    active: '#0A0A0A',
  },

  fontSize: {
    fs20: '20px',
    fs24: '24px',
    fs28: '28px',
  },

  spacing: value => `${value * 4}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
