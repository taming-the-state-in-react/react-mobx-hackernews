import { observable, action } from 'mobx';

class ArchiveStore {
  @observable archivedStoryIds = [];

  @action archiveStory = id =>
    this.archivedStoryIds.push(id);
}

const archiveStore = ArchiveStore();

export default archiveStore;