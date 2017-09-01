import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';
import Button from './Button';

const HN_BASE_URL = 'http://hn.algolia.com/api/v1/search?query=';

const fetchStories = (query) =>
  fetch(HN_BASE_URL + query)
    .then(response => response.json());

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