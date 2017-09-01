import { observable } from 'mobx';

class ArchiveStore {
  @observable archivedStoryIds = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
  }
}

export default ArchiveStore;