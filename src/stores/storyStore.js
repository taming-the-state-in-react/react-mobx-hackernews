import { observable, action } from 'mobx';

class StoryStore {
  @observable stories;

  @action setStories = stories =>
    this.stories = stories;
}

const storyStore = StoryStore();

export default storyStore;