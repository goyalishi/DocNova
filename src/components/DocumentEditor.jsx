// // src/components/DocumentEditor.jsx
// import React, { useState, useEffect } from "react";
// import "./DocumentEditor.css";

// const DocumentEditor = ({ currentDocument, saveDocument, isNewDocument }) => {
//   const [content, setContent] = useState(currentDocument.content || "");

//   // Update content if currentDocument changes
//   useEffect(() => {
//     if (!isNewDocument) {
//       setContent(currentDocument.content);
//     }
//   }, [currentDocument, isNewDocument]);

//   const handleContentChange = (e) => {
//     setContent(e.target.value);
//   };

//   const handleSave = () => {
//     saveDocument(content);
//   };

//   return (
//     <div className="document-editor">
//       <textarea
//         value={content}
//         onChange={handleContentChange}
//         placeholder="Start writing here..."
//         className="editor-textarea"
//       />
//       <button className="save-btn" onClick={handleSave}>
//         Save Document
//       </button>
//     </div>
//   );
// };

// export default DocumentEditor;
// import React, { useState } from "react";
// import "./DocumentEditor.css";

// const DocumentEditor = ({ currentDocument, saveDocument }) => {
//   const [content, setContent] = useState(currentDocument.content);

//   const handleSave = () => {
//     saveDocument({ ...currentDocument, content });
//   };

//   return (
//     <div className="document-editor">
//       <textarea
//         className="editor"
//         value={content}
//         onChange={(e) => setContent(e.target.value)}
//         placeholder="Start typing..."
//       />
//       <button className="save-btn" onClick={handleSave}>
//         Save Document
//       </button>
//     </div>
//   );
// };

// export default DocumentEditor;
import React, { useState } from "react";
import "./DocumentEditor.css";

const DocumentEditor = ({ currentDocument, saveDocument }) => {
  const [content, setContent] = useState(currentDocument?.content || "");
  const [title, setTitle] = useState(currentDocument?.title || "Untitled Document");

  const handleSave = () => {
    const updatedDoc = { ...currentDocument, title, content };
    saveDocument(updatedDoc); // Save changes to the document
  };

  return (
    <div className="document-editor">
      <input
        type="text"
        value={title}
        className="document-title"
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Document Title"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Start writing here..."
        className="document-content"
      />
      <button className="save-btn" onClick={handleSave}>
        Save Document
      </button>
    </div>
  );
};

export default DocumentEditor;
