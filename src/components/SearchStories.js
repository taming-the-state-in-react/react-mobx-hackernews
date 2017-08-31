import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';
import Button from './Button';
import { fetchStories } from '../api/story';

@inject('storyStore') @observer
class SearchStories extends Component {
  @observable query = '';

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  @action
  onSubmit(event) {
    const { storyStore } = this.props;

    if (this.query) {
      fetchStories(this.query)
        .then(result => storyStore.setStories(result.hits))
        .catch(error => storyStore.setError(error));

      this.query = '';
    }

    event.preventDefault();
  }

  @action
  onChange(event) {
    const { value } = event.target;
    this.query = value;;
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          value={this.query}
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
