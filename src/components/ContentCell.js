import React from 'react';

class ContentCell extends React.Component {
  render() {
    return <div className={this.props.colSize}>{this.props.children}</div>;
  }
}

export default ContentCell;
