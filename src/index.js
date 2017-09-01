import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import storyStore from './stores/storyStore';
import archiveStore from './stores/archiveStore';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App
    stories={storyStore.stories}
    onArchive={(objectID) => archiveStore.archivedStoryIds.push(objectID)}
  />,
  document.getElementById('root')
);
registerServiceWorker();
