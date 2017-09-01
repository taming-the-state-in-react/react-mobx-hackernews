import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import store from './stores';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App
    stories={store.storyStore.readableStories}
    onArchive={(objectID) => store.archiveStore.archivedStoryIds.push(objectID)}
  />,
  document.getElementById('root')
);
registerServiceWorker();
