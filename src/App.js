import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Splash, About, Projects, Contact, ErrorPage } from './Pages';
import { PageWithNavigation } from './Components';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/app.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Splash />} />
        <Route
          path='/about'
          element={<PageWithNavigation page={<About />} />}
        />
        <Route
          path='/projects'
          element={<PageWithNavigation page={<Projects />} />}
        />
        <Route
          path='/contact'
          element={<PageWithNavigation page={<Contact />} />}
        />
        <Route path='*' element={<PageWithNavigation page={<ErrorPage />} />} />
      </Routes>
    </Router>
  );
}

export default App;
