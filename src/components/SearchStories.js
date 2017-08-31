import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Button from './Button';
import { fetchStories } from '../api/story';

const applyQueryState = query => () => ({
  query
});

@inject('storyStore') @observer
class SearchStories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    const { storyStore } = this.props;
    const { query } = this.state;

    if (query) {
      fetchStories(query)
        .then(result => storyStore.setStories(result.hits))
        .catch(error => storyStore.setError(error));

      this.setState(applyQueryState(''));
    }

    event.preventDefault();
  }

  onChange(event) {
    const { value } = event.target;
    this.setState(applyQueryState(value));
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          value={this.state.query}
          onChange={this.onChange}
        />
        <Button type="submit">
          Search
        </Button>
      </form>
    );
  }
}

export default SearchStories;