import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import App from './components/App';
import stores from './stores';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider { ...stores }>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
