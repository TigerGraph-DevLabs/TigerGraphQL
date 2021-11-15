import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PeopleViewer from './PeopleViewer';
import PersonDetail from './PersonDetail';

import './App.css';

class App extends Component {
  render() {
    return (
      <main className="content">
        <Router>
          <Routes>
            <Route path="/" element={<PeopleViewer />} />
            <Route path="/person/:personID" element={<PersonDetail />} />
          </Routes>
        </Router>
      </main>
    );
  }
}

export default App;