import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SplashPage, About, Projects, Contact, ErrorPage } from './Pages';
import { PageWithNavigation } from './Components';
import { NavbarVariant } from './Components/NavigationBar.tsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/app.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <PageWithNavigation
              page={<SplashPage />}
              navbarVariant={NavbarVariant.Light}
            />
          }
        />
        <Route
          path='/about'
          element={
            <PageWithNavigation
              page={<About />}
              navbarVariant={NavbarVariant.Dark}
            />
          }
        />
        <Route
          path='/projects'
          element={
            <PageWithNavigation
              page={<Projects />}
              navbarVariant={NavbarVariant.Dark}
            />
          }
        />
        <Route
          path='/contact'
          element={
            <PageWithNavigation
              page={<Contact />}
              navbarVariant={NavbarVariant.Dark}
            />
          }
        />
        <Route
          path='*'
          element={
            <PageWithNavigation
              page={<ErrorPage />}
              navbarVariant={NavbarVariant.Dark}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
