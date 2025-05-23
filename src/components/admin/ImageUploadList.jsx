import React from "react";
import "../../assets/css/admin/ImageUploadList.css";
/**
 * ImageUploadList component for managing hotel image uploads.
 *
 * Renders a file input for selecting multiple images, enforces a 1MB size limit per file,
 * displays a list of selected images, and allows removal of images from the list.
 *
 * Props:
 * - images: Array of File objects representing the selected images.
 * - setImages: Function to update the images array.
 *
 * @component
 * @returns {JSX.Element} The UI for uploading and managing hotel images.
 */
const MAX_FILE_MB = 1;
const MAX_FILE_BYTES = MAX_FILE_MB * 1024 * 1024;

const ImageUploadList = ({ images, setImages }) => {
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);

    const oversized = selectedFiles.filter(
      (file) => file.size > MAX_FILE_BYTES
    );
    const validFiles = selectedFiles.filter(
      (file) => file.size <= MAX_FILE_BYTES
    );

    if (oversized.length > 0) {
      alert(
        `The following file(s) exceed the 1MB limit and were not added:\n` +
          oversized
            .map((f) => `- ${f.name} (${(f.size / 1024 / 1024).toFixed(2)} MB)`)
            .join("\n")
      );
    }

    setImages((prev) => [...prev, ...validFiles]);
  };

  const handleRemove = (index) => {
    const updated = images.filter((_, i) => i !== index);
    setImages(updated);
  };

  return (
    <div className="image-upload-container">
      <label className="hotel-form-label">Hotel Images</label>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileChange}
        className="hotel-form-input"
      />
      {images.length > 0 && (
        <ul className="image-list">
          {images.map((img, i) => (
            <li key={i} className="image-item">
              {img.name} ({(img.size / 1024 / 1024).toFixed(2)} MB)
              <button
                type="button"
                onClick={() => handleRemove(i)}
                className="remove-image-button"
              >
                ✖
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ImageUploadList;
