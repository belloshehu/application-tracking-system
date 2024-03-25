import React from 'react';
import { Home } from './pages/Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </React.Fragment>
   
  );
}

export default App;

