import React, { Component } from 'react';
import PeopleViewer from './PeopleViewer';
import './App.css';

class App extends Component {
  render() {
    return (
      <main className="content">
        <PeopleViewer />
      </main>
    );
  }
}

export default App;