// /src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/common/Layout";
import HomePage from "./pages/HomePage";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminUsers from "./pages/admin/Users";
import AddNewHotelForm from "./pages/AddNewHotelForm";
import RegisterPage from "./pages/RegisterPage.jsx";
import ProductPage from "./pages/ProductPage";
import PaymentPage from "./pages/PaymentPage";
import HotelSearchResultsPage from "./pages/HotelSearchResultsPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/AddNewHotelForm" element={<AddNewHotelForm />} />
          <Route path="/RegisterPage" element={<RegisterPage />} />
          <Route path="/ProductPage" element={<ProductPage />} />
          <Route path="/PaymentPage" element={<PaymentPage />} />
          <Route path="/search" element={<HotelSearchResultsPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
