import React from 'react';
import ContentCell from './ContentCell';

class ContentView extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <ContentCell colSize="col-6">
            <p>Texto lado esquerdo</p>
          </ContentCell>
          <ContentCell colSize="col-6">
            <p>Texto lado direito</p>
          </ContentCell>
        </div>
      </div>
    );
  }
}

export default ContentView;
