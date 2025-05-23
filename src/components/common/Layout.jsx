// components/common/Layout.jsx
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
/**
 * Layout component for consistent page structure.
 *
 * Wraps the application with a header, main content area, and footer.
 * Ensures a uniform layout across all pages by rendering children between the header and footer.
 *
 * Props:
 * - children: React nodes to be rendered as the main content.
 *
 * @component
 * @returns {JSX.Element} The layout structure with header, main content, and footer.
 */
const Layout = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <Header />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
