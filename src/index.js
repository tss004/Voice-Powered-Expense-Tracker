import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css';
{/*///7c4aee08-1073-4a32-b862-ebe1850e0732*/}
ReactDOM.render(
  <SpeechProvider appId="72e81129-6bc2-4180-8a41-0ecc2378b88e" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById('root'),
);
