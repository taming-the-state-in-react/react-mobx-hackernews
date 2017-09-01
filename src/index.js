import React from 'react';
import ReactDOM from 'react-dom';
import { autorun } from 'mobx';
import './index.css';
import App from './components/App';
import store from './stores';
import registerServiceWorker from './registerServiceWorker';

function render() {
  ReactDOM.render(
    <App
      stories={store.storyStore.readableStories}
      onArchive={(objectID) => store.archiveStore.archiveStory(objectID)}
    />,
    document.getElementById('root')
  );
}

autorun(render);

registerServiceWorker();
