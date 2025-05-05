// /src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
// import ProductPage from './pages/ProductPage'; // for later
// import Header from './components/Header';      // for later
// import Footer from './components/Footer';      // for later

function App() {
  return (
    <BrowserRouter>
      {/* Optional layout wrapper if you build a header/footer later */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/product" element={<ProductPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
