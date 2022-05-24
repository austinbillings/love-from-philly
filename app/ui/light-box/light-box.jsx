import React from 'react';

import * as Events from 'arkade/utils/event-utils';
import { Icon } from 'arkade/common';
import './light-box.scss'

export class LightBox extends React.Component {
  constructor (props) {
    super(props);

    this.listeners = {
      prev: null,
      next: null,
      escape: null
    };

    this.closeModal = this.closeModal.bind(this);
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.photo && !this.props.photo) {
      this.listeners.prev = Events.onKey('left', (e) => this.handleNavigation(e, 'prev'));
      this.listeners.next = Events.onKey('right', (e) => this.handleNavigation(e, 'next'));
      this.listeners.escape = Events.onKey('esc', (e) => this.closeModal());
    }
    if (!nextProps.photo && this.props.photo && this.listeners.prev) {
      Events.remove(this.listeners.prev);
    }
    if (!nextProps.photo && this.props.photo && this.listeners.next) {
      Events.remove(this.listeners.next);
    }
  }

  componentDidMount () {
  }

  handleImageClick (e) {
    e.stopPropagation();
  }

  getCurrentPhotoIndex () {
    const { photo, photoList, onNavigate } = this.props;
    const index = photoList.findIndex(p => p === photo);
    return index < 0 ? null : index;
  }

  getCurrentPhotoCaption () {
    const { photoList } = this.props;
    let index = this.getCurrentPhotoIndex();
    if (!photoList || index === null) return null;
    const count = photoList.length;

    return (
      <figcaption>
        Photo <em>{++index}</em> of <em>{count}</em>
      </figcaption>
    );
  }

  handleNavigation (e, direction) {
    e.stopPropagation();
    const { photo, photoList, onNavigate } = this.props;

    const index = this.getCurrentPhotoIndex();
    if (index === null) return;

    let directions = {
      prev: (index === 0 ? photoList.length - 1 : index - 1),
      next: (index === photoList.length - 1 ? 0 : index + 1)
    };

    if (!direction in directions) return;
    let target = photoList[directions[direction]];
    return onNavigate(target);
  }

  closeModal (e) {
    const { onClose } = this.props;
    if (onClose) onClose();
  }

  renderNavigation (direction) {
    const { photoList, onNavigate } = this.props;
    if (!photoList || !onNavigate) return null;
    let directions = {
      prev: { icon: 'angle-left'},
      next: { icon: 'angle-right'}
    };
    if (!direction in directions) return null;
    let { icon } = directions[direction];
    let className = 'LightBox-Navigation ' + direction;
    return (
      <box className={className} onClick={e => this.handleNavigation(e, direction)}>
        <Icon fa={icon} />
      </box>
    );
  }

  render () {
    const { photo } = this.props;
    const className = 'LightBox-Modal ' + (photo ? 'active' : 'inactive');

    const prev = this.renderNavigation('prev');
    const next = this.renderNavigation('next');
    const caption = this.getCurrentPhotoCaption();

    const content = (
      <div className={className} onClick={this.closeModal} ref={(modal) => this.modal = modal}>
        {prev}
        {!photo ? null : (
          <div className="LightBox-Photo-Wrapper" onClick={this.handleImageClick}>
            <img
              src={photo}
              className="LightBox-Photo"
            />
            {caption}
          </div>
        )}
        {next}
      </div>
    );

    return (
      <div className="LightBox">
        {content}
      </div>
    );
  }
};
