// import React from "react";
// import "./DocumentList.css";

// const DocumentList = ({ documents, deleteDocument }) => {
//   return (
//     <div className="document-list">
//       {documents.length === 0 ? (
//         <p className="no-documents">No documents created yet. Add a new document!</p>
//       ) : (
//         documents.map((doc) => (
//           <div key={doc.id} className="document-item">
//             <span className="doc-title">{doc.title}</span>
//             <button className="delete-btn" onClick={() => deleteDocument(doc.id)}>
//               <i className="fa fa-trash"></i> Delete
//             </button>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default DocumentList;
// import React, { useState } from "react";
// import "./DocumentList.css";

// const DocumentList = ({ documents, deleteDocument, openDocument, renameDocument }) => {
//   const [renamingId, setRenamingId] = useState(null);
//   const [newTitle, setNewTitle] = useState("");

//   const handleRename = (id) => {
//     renameDocument(id, newTitle);
//     setRenamingId(null);
//     setNewTitle("");
//   };

//   return (
//     <div className="document-list">
//       {documents.length === 0 ? (
//         <p className="no-documents">No documents created yet. Add a new document!</p>
//       ) : (
//         documents.map((doc) => (
//           <div key={doc.id} className="document-item">
//             {renamingId === doc.id ? (
//               <div className="rename-container">
//                 <input
//                   type="text"
//                   className="rename-input"
//                   value={newTitle}
//                   onChange={(e) => setNewTitle(e.target.value)}
//                   placeholder="Rename Document"
//                 />
//                 <button
//                   className="save-rename-btn"
//                   onClick={() => handleRename(doc.id)}
//                 >
//                   Save
//                 </button>
//               </div>
//             ) : (
//               <>
//                 <span
//                   className="doc-title"
//                   onClick={() => openDocument(doc)}
//                 >
//                   {doc.title}
//                 </span>
//                 <div className="actions">
//                   <button
//                     className="rename-btn"
//                     onClick={() => setRenamingId(doc.id)}
//                   >
//                     Rename
//                   </button>
//                   <button
//                     className="delete-btn"
//                     onClick={() => deleteDocument(doc.id)}
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </>
//             )}
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default DocumentList;
import React from "react";
import "./DocumentList.css";

const DocumentList = ({ documents, deleteDocument, openDocument, renameDocument }) => {
  const handleRename = (id) => {
    const newTitle = prompt("Enter a new title:");
    if (newTitle) {
      renameDocument(id, newTitle);
    }
  };

  return (
    <div className="document-list">
      {documents.map((doc) => (
        <div key={doc.id} className="document-item">
          <span className="document-title">{doc.title}</span>
          <div className="document-actions">
            <button onClick={() => openDocument(doc)}>Edit</button>
            <button onClick={() => handleRename(doc.id)}>Rename</button>
            <button onClick={() => deleteDocument(doc.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DocumentList;
