/* import React, { useState } from "react";

const DocumentForm = ({ addDocument }) => {
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim()) {
            addDocument(title);
            setTitle("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="document-form">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Untitled document"
                className="input-box"
            />
            <button type="submit" className="add-btn">Create Document</button>
        </form>
    );
};

export default DocumentForm;
 */
// src/components/DocumentForm.jsx
import React, { useState } from "react";
import "./DocumentForm.css";

const DocumentForm = () => {
  const [documentName, setDocumentName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle document creation logic here
    console.log(`Document Created: ${documentName}`);
  };

  return (
    <div className="document-form">
      <input
        className="input-box"
        type="text"
        placeholder="Enter Document Name"
        value={documentName}
        onChange={(e) => setDocumentName(e.target.value)}
      />
      <button className="add-btn" onClick={handleSubmit}>
        Create Document
      </button>
    </div>
  );
};

export default DocumentForm;
