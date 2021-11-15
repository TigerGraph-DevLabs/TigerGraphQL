import React, { Component } from 'react';
import PeopleViewer from './PeopleViewer';
import PersonDetail from './PersonDetail';

import './App.css';

class App extends Component {
  render() {
    return (
      <main className="content">
        <PersonDetail name={"Emily"} />
        {/* <PeopleViewer /> */}
      </main>
    );
  }
}

export default App;