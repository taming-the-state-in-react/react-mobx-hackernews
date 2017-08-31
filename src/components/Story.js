import React from 'react';
import { inject, observer } from 'mobx-react';
import { ButtonInline } from './Button';
import './Story.css';

const Story = ({ story, columns, archiveStore }) => {
  const {
    title,
    url,
    author,
    num_comments,
    points,
    objectID,
  } = story;

  return (
    <div className="story">
      <span style={{ width: columns.title.width }}>
        <a href={url}>{title}</a>
      </span>
      <span style={{ width: columns.author.width }}>
        {author}
      </span>
      <span style={{ width: columns.comments.width }}>
        {num_comments}
      </span>
      <span style={{ width: columns.points.width }}>
        {points}
      </span>
      <span style={{ width: columns.archive.width }}>
        <ButtonInline onClick={() => archiveStore.archiveStory(objectID)}>
          Archive
        </ButtonInline>
      </span>
    </div>
  );
}

export default inject('archiveStore')(observer(Story));