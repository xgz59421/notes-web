import React from 'react';
import ReactDOM from 'react-dom';
// import App from './component/App1';
// import App from './component/App2';
// import App from './component/App3';
// import App from './component/App4';
// import App from './component/App5';
// import App from './component/App6';
// import App from './component/App7';
// import App from './component/App8';
// import App from './component/App9';
import App from './component/App10';

// 只有 App10 用到了 ThemeProvider
// npm i emotion-theming
import { ThemeProvider } from 'emotion-theming';

const theme = {
  colors: {
    primary: 'tomato'
  }
};

ReactDOM.render(
  // 只有 ./component/App10 用到了 ThemeProvider
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

