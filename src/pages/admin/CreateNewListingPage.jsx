import React from "react";
import CreateListingForm from "../../components/admin/CreateListingForm.jsx";
/**
 * Admin page for creating a new provider.
 *
 * Renders a form for administrators to input and submit new provider details.
 * Utilizes the CreateProviderForm component for form handling and validation.
 *
 * @component
 * @returns {JSX.Element} The rendered create new provider admin page.
 */

const CreateListingPage = () => {
  return (
    <div className="page-container">
      <h1>Create New Listing</h1>
      <CreateListingForm />
    </div>
  );
};

export default CreateListingPage;
