import React from 'react';
import './style.scss';

export default class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className = "tile">
        {this.props.text}
      </div>
    );
  }
}
