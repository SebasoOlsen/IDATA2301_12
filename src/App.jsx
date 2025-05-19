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
import SwaggerUIPage from "./pages/SwaggerUIPage.jsx";
import FavouritesPage from "./pages/FavouritesPage.jsx";
import BookingPage from "./pages/BookingPage.jsx";
import MyPage from "./pages/MyPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import Test from "./pages/Test.jsx";

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
          <Route path="/Product/:id" element={<ProductPage />} />
          <Route path="/PaymentPage" element={<PaymentPage />} />
          <Route path="/search" element={<HotelSearchResultsPage />} />
          <Route path="/api-docs" element={<SwaggerUIPage />} />
          <Route path="/swagger-ui/*" element={<SwaggerUIPage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
          <Route path="/booking" element={<BookingPage />} />
          {/*<Route path="/contactInformation" element={<ContactInformation/>} />*/}
          <Route path="/my-page" element={<MyPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
