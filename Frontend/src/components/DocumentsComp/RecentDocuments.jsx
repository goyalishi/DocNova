import React from "react";
import DocumentCard from "./DocumentCard";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RecentDocuments = ({ recentDocs, setRecentDocs }) => {
  const navigate = useNavigate();

  const formatDate = (isoString) => {
    const date = new Date(isoString);

    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  };

  return (
    <section className="px-6 py-8">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        Recent Documents
      </h3>
      {recentDocs.length>0? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentDocs.map((doc, index) => (
            <DocumentCard
              key={index}
              title={doc.title}
              lastEdited={formatDate(doc.updatedAt)}
              onClick={() => navigate(`/editor/${doc._id}`)}
              className="cursor-pointer"
            />
          ))}
        </div>
      ):(
        <div className="text-center text-gray-600 text-xl">No Recent Documents</div>
      )}
      
    </section>
  );
};

export default RecentDocuments;
