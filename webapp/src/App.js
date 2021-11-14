import React, { Component } from 'react';
import PeopleViewer from './PeopleViewer';
import { Button } from 'antd';
import './App.css';

class App extends Component {
  render() {
    return (
      <main>
        <PeopleViewer />
        <Button type="primary">Button</Button>
      </main>
    );
  }
}

export default App;