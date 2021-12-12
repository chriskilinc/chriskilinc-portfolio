import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './fonts/psyche.ttf'
import { ApplicationInsights } from '@microsoft/applicationinsights-web'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const appInsights = new ApplicationInsights({
  config: {
    instrumentationKey: 'aa5bd5ff-f2ac-4f51-a199-56f050248d98'
    /* ...Other Configuration Options... */
  }
});
appInsights.loadAppInsights();
appInsights.trackPageView(); // Manually call trackPageView to establish the current user/session/pageview
