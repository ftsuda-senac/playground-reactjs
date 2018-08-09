import React from 'react';
import ReactDOM from 'react-dom';
import ContentView from './components/ContentView';

import './styles.css';

class App extends React.Component {
  render() {
    return <ContentView />;
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
