import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Homepage from './Pages/Homepage';
import DetailsPage from './Pages/DetailsPage';
import SearchResultsPage from './Pages/SearchResultsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="/photo/:id" element={<DetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;