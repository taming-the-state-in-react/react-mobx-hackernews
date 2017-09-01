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

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  @action
  onChange(event) {
    const { value } = event.target;
    this.query = value;
  }

  @action
  onSubmit(event) {
    if (this.query) {
      fetchStories(this.query)
        .then(result => this.props.storyStore.setStories(result.hits))

      this.query = '';
    }

    event.preventDefault();
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