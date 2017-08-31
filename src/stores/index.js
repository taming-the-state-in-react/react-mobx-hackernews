import { useStrict } from 'mobx';

import StoryStore from './storyStore';
import ArchiveStore from './archiveStore';

useStrict(true);

class RootStore {
  constructor() {
    this.storyStore = new StoryStore(this);
    this.archiveStore = new ArchiveStore(this);
  }
}

const rootStore = new RootStore();

export default rootStore;