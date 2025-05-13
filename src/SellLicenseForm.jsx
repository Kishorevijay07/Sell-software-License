import React, { useState } from "react";

const SellLicenseForm = ({ onClose }) => {
  const [licenseId, setLicenseId] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [description, setDescription] = useState("");
  const [companyIdImage, setCompanyIdImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare form data
    const formData = new FormData();
    formData.append("licenseId", licenseId);
    formData.append("companyName", companyName);
    formData.append("contactNumber", contactNumber);
    formData.append("description", description);
    if (companyIdImage) {
      formData.append("companyIdImage", companyIdImage);
    }

    // Simulate form submission
    console.log("Submitting form:");
    for (let pair of formData.entries()) {
      console.log(pair[0] + ":", pair[1]);
    }

    onClose(); // Close modal
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-transparent bg-opacity-30 backdrop-blur-sm" onClick={onClose}></div>

      <div className="bg-white dark:bg-[#1E1E1E] text-black dark:text-white p-6 rounded-xl shadow-xl z-50 w-full max-w-md relative">
        <button
          className="absolute top-3 right-4 text-xl font-bold text-gray-500 hover:text-red-500"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-2xl font-semibold mb-6 text-center">Sell Your License</h2>

        <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
          <div>
            <label className="block text-sm font-medium">License ID</label>
            <input
              type="text"
              value={licenseId}
              onChange={(e) => setLicenseId(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Company Name</label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Contact Number (Optional)</label>
            <input
              type="tel"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">License Description (Optional)</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
              placeholder="e.g., Adobe CC 2023 license, valid till Dec 2025"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Upload Company ID (Image)</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setCompanyIdImage(e.target.files[0])}
              required
              className="w-full px-2 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SellLicenseForm;
