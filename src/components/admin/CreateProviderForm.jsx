import React, { useState } from "react";
import { createProvider } from "../../service/api/providerAPI";

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
