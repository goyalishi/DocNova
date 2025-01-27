// import React, { useState, useEffect } from "react";
// import Navbar from "./Navbar";
// import DocumentForm from "./DocumentForm";
// import DocumentList from "./DocumentList";
// import DocumentEditor from "./DocumentEditor";
// import "./DocumentDashboard.css";

// const DocumentDashboard = () => {
//   const [documents, setDocuments] = useState(
//     JSON.parse(localStorage.getItem("documents")) || []
//   );
//   const [currentDocument, setCurrentDocument] = useState(null);
//   const [isNewDocument, setIsNewDocument] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");

//   // Add document
//   const addDocument = (title) => {
//     const newDocument = {
//       id: Date.now(),
//       title: title,
//       content: "",
//     };
//     const updatedDocuments = [...documents, newDocument];
//     setDocuments(updatedDocuments);
//     localStorage.setItem("documents", JSON.stringify(updatedDocuments));
//     setCurrentDocument(newDocument);
//     setIsNewDocument(true);
//   };

//   // Delete document
//   const deleteDocument = (id) => {
//     const updatedDocuments = documents.filter((doc) => doc.id !== id);
//     setDocuments(updatedDocuments);
//     localStorage.setItem("documents", JSON.stringify(updatedDocuments));
//   };

//   // Open existing document
//   const openDocument = (doc) => {
//     setCurrentDocument(doc);
//     setIsNewDocument(false);
//   };

//   // Create new blank document
//   const createNewDocument = () => {
//     const blankDocument = {
//       id: Date.now(),
//       title: "Untitled Document",
//       content: "",
//     };
//     setCurrentDocument(blankDocument);
//     setIsNewDocument(true);
//   };

//   // Save the current document
//   const saveDocument = (content) => {
//     if (isNewDocument) {
//       const updatedDocuments = [...documents, { ...currentDocument, content }];
//       setDocuments(updatedDocuments);
//       localStorage.setItem("documents", JSON.stringify(updatedDocuments));
//     } else {
//       const updatedDocuments = documents.map((doc) =>
//         doc.id === currentDocument.id ? { ...doc, content } : doc
//       );
//       setDocuments(updatedDocuments);
//       localStorage.setItem("documents", JSON.stringify(updatedDocuments));
//     }
//     setCurrentDocument(null); // Close the editor after saving
//     setIsNewDocument(false);
//   };

//   // Filter documents based on search query
//   const filteredDocuments = documents.filter((doc) =>
//     doc.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // Handle logout functionality
//   const handleLogout = () => {
//     localStorage.clear(); // Clear any stored data if required
//     window.location.href = "/"; // Redirect to the login page
//   };

//   return (
//     <div className="document-dashboard">
//       {/* Navbar with search and logout */}
//       <Navbar
//         onLogout={handleLogout}
//         onSearch={(query) => setSearchQuery(query)}
//       />

//       <div className="document-manager">
//         <h2>Your Documents</h2>

//         {/* Create new document button */}
//         <button className="create-btn" onClick={createNewDocument}>
//           Create New Document
//         </button>

//         {/* Display filtered document list */}
//         <DocumentList
//           documents={filteredDocuments}
//           deleteDocument={deleteDocument}
//           openDocument={openDocument}
//         />

//         {/* Open editor when creating or editing a document */}
//         {(currentDocument || isNewDocument) && (
//           <DocumentEditor
//             currentDocument={currentDocument}
//             saveDocument={saveDocument}
//             isNewDocument={isNewDocument}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default DocumentDashboard;
// import React, { useState } from "react";
// import Navbar from "./Navbar";
// import DocumentList from "./DocumentList";
// import DocumentEditor from "./DocumentEditor";
// import "./DocumentDashboard.css";

// const DocumentDashboard = () => {
//   const [documents, setDocuments] = useState(
//     JSON.parse(localStorage.getItem("documents")) || []
//   );
//   const [currentDocument, setCurrentDocument] = useState(null);
//   const [isNewDocument, setIsNewDocument] = useState(false);

//   const addDocument = (title) => {
//     const newDocument = {
//       id: Date.now(),
//       title: title || "Untitled Document",
//       content: "",
//     };
//     const updatedDocuments = [...documents, newDocument];
//     setDocuments(updatedDocuments);
//     localStorage.setItem("documents", JSON.stringify(updatedDocuments));
//     setCurrentDocument(newDocument);
//     setIsNewDocument(true);
//   };

//   const deleteDocument = (id) => {
//     const updatedDocuments = documents.filter((doc) => doc.id !== id);
//     setDocuments(updatedDocuments);
//     localStorage.setItem("documents", JSON.stringify(updatedDocuments));
//   };

//   const openDocument = (doc) => {
//     setCurrentDocument(doc);
//     setIsNewDocument(false);
//   };

//   const saveDocument = (updatedDoc) => {
//     const updatedDocuments = isNewDocument
//       ? [...documents, updatedDoc]
//       : documents.map((doc) =>
//           doc.id === updatedDoc.id ? { ...updatedDoc } : doc
//         );
//     setDocuments(updatedDocuments);
//     localStorage.setItem("documents", JSON.stringify(updatedDocuments));
//     setCurrentDocument(null);
//     setIsNewDocument(false);
//   };

//   const renameDocument = (id, newTitle) => {
//     const updatedDocuments = documents.map((doc) =>
//       doc.id === id ? { ...doc, title: newTitle } : doc
//     );
//     setDocuments(updatedDocuments);
//     localStorage.setItem("documents", JSON.stringify(updatedDocuments));
//   };

//   const handleLogout = () => {
//     localStorage.clear();
//     window.location.href = "/";
//   };

//   return (
//     <div className="document-dashboard">
//       <Navbar onLogout={handleLogout} />
//       <div className="document-manager">
//         <h2>Your Documents</h2>
//         <button
//           className="create-btn"
//           onClick={() => addDocument("Untitled Document")}
//         >
//           Create New Document
//         </button>
//         <DocumentList
//           documents={documents}
//           deleteDocument={deleteDocument}
//           openDocument={openDocument}
//           renameDocument={renameDocument}
//         />
//         {currentDocument && (
//           <DocumentEditor
//             currentDocument={currentDocument}
//             saveDocument={saveDocument}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default DocumentDashboard;
// import React, { useState } from "react";
// import Navbar from "./Navbar";
// import DocumentList from "./DocumentList";
// import DocumentEditor from "./DocumentEditor";
// import "./DocumentDashboard.css";

// const DocumentDashboard = () => {
//   const [documents, setDocuments] = useState(
//     JSON.parse(localStorage.getItem("documents")) || []
//   );
//   const [currentDocument, setCurrentDocument] = useState(null);
//   const [isNewDocument, setIsNewDocument] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredDocuments, setFilteredDocuments] = useState(documents);

//   const addDocument = (title) => {
//     const newDocument = {
//       id: Date.now(),
//       title: title || "Untitled Document",
//       content: "",
//     };
//     const updatedDocuments = [...documents, newDocument];
//     setDocuments(updatedDocuments);
//     setFilteredDocuments(updatedDocuments);
//     localStorage.setItem("documents", JSON.stringify(updatedDocuments));
//     setCurrentDocument(newDocument);
//     setIsNewDocument(true);
//   };

//   const deleteDocument = (id) => {
//     const updatedDocuments = documents.filter((doc) => doc.id !== id);
//     setDocuments(updatedDocuments);
//     setFilteredDocuments(updatedDocuments);
//     localStorage.setItem("documents", JSON.stringify(updatedDocuments));
//   };

//   const openDocument = (doc) => {
//     setCurrentDocument(doc);
//     setIsNewDocument(false);
//   };

//   const saveDocument = (updatedDoc) => {
//     const updatedDocuments = isNewDocument
//       ? [...documents, updatedDoc]
//       : documents.map((doc) =>
//           doc.id === updatedDoc.id ? { ...updatedDoc } : doc
//         );
//     setDocuments(updatedDocuments);
//     setFilteredDocuments(updatedDocuments);
//     localStorage.setItem("documents", JSON.stringify(updatedDocuments));
//     setCurrentDocument(null);
//     setIsNewDocument(false);
//   };

//   const renameDocument = (id, newTitle) => {
//     const updatedDocuments = documents.map((doc) =>
//       doc.id === id ? { ...doc, title: newTitle } : doc
//     );
//     setDocuments(updatedDocuments);
//     setFilteredDocuments(updatedDocuments);
//     localStorage.setItem("documents", JSON.stringify(updatedDocuments));
//   };

//   const handleSearch = () => {
//     const filtered = documents.filter((doc) =>
//       doc.title.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     setFilteredDocuments(filtered);
//   };

//   const handleLogout = () => {
//     localStorage.clear();
//     window.location.href = "/";
//   };

//   return (
//     <div className="document-dashboard">
//       <Navbar
//         onLogout={handleLogout}
//         onSearchQueryChange={setSearchQuery}
//         onSearch={handleSearch}
//       />
//       <div className="document-manager">
//         <h2>Your Documents</h2>
//         <button
//           className="create-btn"
//           onClick={() => addDocument("Untitled Document")}
//         >
//           Create New Document
//         </button>
//         <DocumentList
//           documents={filteredDocuments}
//           deleteDocument={deleteDocument}
//           openDocument={openDocument}
//           renameDocument={renameDocument}
//         />
//         {currentDocument && (
//           <DocumentEditor
//             currentDocument={currentDocument}
//             saveDocument={saveDocument}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default DocumentDashboard;
import React, { useState } from "react";
import Navbar from "./Navbar";
import DocumentList from "./DocumentList";
import DocumentEditor from "./DocumentEditor";
import "./DocumentDashboard.css";

const DocumentDashboard = () => {
  const [documents, setDocuments] = useState(
    JSON.parse(localStorage.getItem("documents")) || []
  );
  const [currentDocument, setCurrentDocument] = useState(null);
  const [isNewDocument, setIsNewDocument] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredDocuments, setFilteredDocuments] = useState(documents);

  const createNewDocument = () => {
    const blankDocument = {
      id: Date.now(),
      title: "Untitled Document",
      content: "",
    };
    setCurrentDocument(blankDocument); // Open the blank document in the editor
    setIsNewDocument(true); // Mark this as a new document
  };

  const saveDocument = (updatedDoc) => {
    const updatedDocuments = isNewDocument
      ? [...documents, updatedDoc] // Add new document to the list
      : documents.map((doc) =>
          doc.id === updatedDoc.id ? { ...updatedDoc } : doc
        ); // Update the existing document

    setDocuments(updatedDocuments);
    setFilteredDocuments(updatedDocuments);
    localStorage.setItem("documents", JSON.stringify(updatedDocuments));
    setCurrentDocument(null); // Close the editor after saving
    setIsNewDocument(false); // Reset the new document state
  };

  const deleteDocument = (id) => {
    const updatedDocuments = documents.filter((doc) => doc.id !== id);
    setDocuments(updatedDocuments);
    setFilteredDocuments(updatedDocuments);
    localStorage.setItem("documents", JSON.stringify(updatedDocuments));
  };

  // const openDocument = (doc) => {
  //   setCurrentDocument(doc);
  //   setIsNewDocument(false);
  // };
  const openDocument = (doc) => {
  setCurrentDocument(doc); // Set the selected document as the current one
  setIsNewDocument(false); // Ensure this isn't treated as a new document
};


  const renameDocument = (id, newTitle) => {
    const updatedDocuments = documents.map((doc) =>
      doc.id === id ? { ...doc, title: newTitle } : doc
    );
    setDocuments(updatedDocuments);
    setFilteredDocuments(updatedDocuments);
    localStorage.setItem("documents", JSON.stringify(updatedDocuments));
  };

  const handleSearch = () => {
    const filtered = documents.filter((doc) =>
      doc.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredDocuments(filtered);
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="document-dashboard">
      <Navbar
        onLogout={handleLogout}
        onSearchQueryChange={setSearchQuery}
        onSearch={handleSearch}
      />
      <div className="document-manager">
        <h2>Your Documents</h2>
        <button className="create-btn" onClick={createNewDocument}>
          Create New Document
        </button>
        <DocumentList
          documents={filteredDocuments}
          deleteDocument={deleteDocument}
          openDocument={openDocument}
          renameDocument={renameDocument}
        />
        {currentDocument && (
          <DocumentEditor
            currentDocument={currentDocument}
            saveDocument={saveDocument}
            isNewDocument={isNewDocument}
          />
        )}
      </div>
    </div>
  );
};

export default DocumentDashboard;
