import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

import bootstrap from './assets/scripts/lib/bootstrap';
import moderizer from './assets/scripts/lib/modernizr-custom';

ReactDOM.render(
  <BrowserRouter basename="/my-site">
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
