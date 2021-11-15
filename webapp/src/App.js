import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PeopleViewer from './PeopleViewer';
import PersonDetail from './PersonDetail';
import CompanyDetail from './CompanyDetail';
import SchoolDetail from './SchoolDetail';
import CityDetail from './CityDetail';

import './App.css';

class App extends Component {
  render() {
    return (
      <main className="content">
        <Router>
          <Routes>
            <Route path="/" element={<PeopleViewer />} />
            <Route path="/person/:personID" element={<PersonDetail />} />
            <Route path="/company/:companyID" element={<CompanyDetail />} />
            <Route path="/school/:schoolID" element={<SchoolDetail />} />
            <Route path="/city/:cityID" element={<CityDetail />} />
          </Routes>
        </Router>
      </main>
    );
  }
}

export default App;