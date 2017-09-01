import { observable } from 'mobx';

class ArchiveStore {
  @observable archivedStoryIds = [];
}

const archiveStore = new ArchiveStore();

export default archiveStore;