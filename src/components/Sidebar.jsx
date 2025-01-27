import React from "react";

const Sidebar = ({ documents, openDocument, deleteDocument }) => {
    return (
        <div className="sidebar">
            <h2>My Documents</h2>
            {documents.length === 0 ? (
                <p>No documents available</p>
            ) : (
                <ul>
                    {documents.map((doc) => (
                        <li key={doc.id}>
                            <span onClick={() => openDocument(doc)}>{doc.title}</span>
                            <button onClick={() => deleteDocument(doc.id)} className="delete-btn">
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Sidebar;
