import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import storyStore from './stores/storyStore';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App stories={storyStore.stories} onArchive={(objectID) => { console.log(objectID); }} />,
  document.getElementById('root')
);
registerServiceWorker();
