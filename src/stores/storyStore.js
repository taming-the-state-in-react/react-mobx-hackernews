import { observable, computed, action } from 'mobx';

const isNotArchived = (archivedStoryIds) => (story) =>
  archivedStoryIds.indexOf(story.objectID) === -1;

class StoryStore {
  @observable stories = [];
  @observable error = null;

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @action setStories = stories => {
    this.stories = stories;
    this.error = null;
  }

  @action setError = error => {
    this.stories = [];
    this.error = error;
  }

  @computed get readableStories() {
    const { archivedStoryIds } = this.rootStore.archiveStore;
    return this.stories.filter(isNotArchived(archivedStoryIds));
  }
}

export default StoryStore;