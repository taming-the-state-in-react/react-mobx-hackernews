import { observable, computed } from 'mobx';

const INITIAL_STATE = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  }, {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const isNotArchived = (archivedStoryIds) => (story) =>
  archivedStoryIds.indexOf(story.objectID) === -1;

class StoryStore {
  @observable stories = INITIAL_STATE;

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @computed get readableStories() {
    const { archivedStoryIds } = this.rootStore.archiveStore;
    return this.stories.filter(isNotArchived(archivedStoryIds));
  }
}

export default StoryStore;