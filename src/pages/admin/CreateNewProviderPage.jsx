import React from "react";
import CreateProviderForm from "../../components/admin/CreateProviderForm.jsx";
/**
 * Admin page for creating a new provider.
 *
 * Renders a form for administrators to input and submit new provider details.
 * Utilizes the CreateProviderForm component for form handling and validation.
 *
 * @component
 * @returns {JSX.Element} The rendered create new provider admin page.
 */
const CreateProviderPage = () => {
  return (
    <div className="page-container">
      <h1>Create New Provider</h1>
      <CreateProviderForm />
    </div>
  );
};

export default CreateProviderPage;
