import { observable, computed, action } from 'mobx';

const isNotArchived = (archivedStoryIds) => (story) =>
  archivedStoryIds.indexOf(story.objectID) === -1;

class StoryStore {
  @observable stories = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @action setStories = stories =>
    this.stories = stories;

  @computed get readableStories() {
    const { archivedStoryIds } = this.rootStore.archiveStore;
    return this.stories.filter(isNotArchived(archivedStoryIds));
  }
}

export default StoryStore;