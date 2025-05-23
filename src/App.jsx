// File: `IDATA2301_12/src/App.jsx`
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/common/Layout";
import HomePage from "./pages/HomePage";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminUsers from "./pages/admin/Users";
import AddNewHotelForm from "./pages/admin/AddNewHotelForm";
import RegisterPage from "./pages/RegisterPage.jsx";
import ProductPage from "./pages/ProductPage";
import PaymentPage from "./pages/PaymentPage";
import HotelSearchResultsPage from "./pages/HotelSearchResultsPage.jsx";
import SwaggerUIPage from "./pages/SwaggerUIPage.jsx";
import FavouritesPage from "./pages/FavouritesPage.jsx";
import BookingPage from "./pages/BookingPage.jsx";
import MyPage from "./pages/MyPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import CreateNewListingPage from "./pages/admin/CreateNewListingPage.jsx";
import CreateNewProviderPage from "./pages/admin/CreateNewProviderPage.jsx";
import AdminHotels from "./pages/admin/Hotels.jsx";
import ContactInformation from "./components/ContactInformation.jsx";
import TermsAndConditions from "./components/TermsAndConditions.jsx";
import { UserProvider } from "./components/UserContext.jsx";
import AdminRoute from "/src/components/AdminRoute.jsx";

function App() {
  return (
      <UserProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/RegisterPage" element={<RegisterPage />} />
              <Route path="/Product/:id" element={<ProductPage />} />
              <Route path="/PaymentPage" element={<PaymentPage />} />
              <Route path="/search" element={<HotelSearchResultsPage />} />
              <Route path="/api-docs" element={<SwaggerUIPage />} />
              <Route path="/swagger-ui/*" element={<SwaggerUIPage />} />
              <Route path="/favourites" element={<FavouritesPage />} />
              <Route path="/booking" element={<BookingPage />} />
              <Route path="/contactInformation" element={<ContactInformation />} />
              <Route path="/my-page" element={<MyPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/termsAndConditions" element={<TermsAndConditions />} />
              <Route
                  path="/admin/dashboard"
                  element={
                    <AdminRoute>
                      <AdminDashboard />
                    </AdminRoute>
                  }
              />
              <Route
                  path="/admin/users"
                  element={
                    <AdminRoute>
                      <AdminUsers />
                    </AdminRoute>
                  }
              />
              <Route
                  path="/admin/create-new-listing"
                  element={
                    <AdminRoute>
                      <CreateNewListingPage />
                    </AdminRoute>
                  }
              />
              <Route
                  path="/admin/create-new-provider"
                  element={
                    <AdminRoute>
                      <CreateNewProviderPage />
                    </AdminRoute>
                  }
              />
              <Route
                  path="/admin/add-new-hotel"
                  element={
                    <AdminRoute>
                      <AddNewHotelForm />
                    </AdminRoute>
                  }
              />
              <Route
                  path="/admin/hotels"
                  element={
                    <AdminRoute>
                      <AdminHotels />
                    </AdminRoute>
                  }
              />
            </Routes>
          </Layout>
        </BrowserRouter>
      </UserProvider>
  );
}

export default App;