import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ApplicationInsights } from '@microsoft/applicationinsights-web'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

const appInsights = new ApplicationInsights({
  config: {
    instrumentationKey: 'aa5bd5ff-f2ac-4f51-a199-56f050248d98'
    /* ...Other Configuration Options... */
  }
});
appInsights.loadAppInsights();
appInsights.trackPageView(); // Manually call trackPageView to establish the current user/session/pageview

console.log(`%c
       __          __         __     __ __ __             
.----.|  |--.----.|__|.-----.|  |--.|__|  |__|.-----.----.
|  __||     |   _||  ||__ --||    < |  |  |  ||     |  __|
|____||__|__|__|  |__||_____||__|__||__|__|__||__|__|____|

`, 'color: #f27281; font-family: monospace; font-size: 10px;');