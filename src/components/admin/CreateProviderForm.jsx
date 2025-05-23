import React, { useState } from "react";
import { createProvider } from "../../service/api/providerAPI";

/**
 * CreateProviderForm component for admin users.
 *
 * Renders a form to create a new provider by entering a name.
 * Handles form submission and calls the API to create the provider.
 *
 * State:
 * - name: The name of the provider to be created.
 *
 * Side Effects:
 * - Resets the form on successful creation.
 *
 * @component
 * @returns {JSX.Element} The form for creating a new provider.
 */
const CreateProviderForm = () => {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { name };

    try {
      await createProvider(payload);
      alert("Provider created!");
      setName("");
      setWebsite("");
    } catch (err) {
      console.error(err);
      alert("Failed to create provider.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="create-provider-form">
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <button type="submit">Create Provider</button>
    </form>
  );
};

export default CreateProviderForm;
