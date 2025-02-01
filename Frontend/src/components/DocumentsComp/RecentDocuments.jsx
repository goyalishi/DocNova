import React from "react";
import DocumentCard from "./DocumentCard";

const documents = [
  { title: "Project Proposal", lastEdited: "2 hours ago" },
  { title: "Meeting Notes", lastEdited: "Yesterday" },
  { title: "Budget Report", lastEdited: "3 days ago" },
  { title: "Marketing Strategy", lastEdited: "1 week ago" },
  { title: "Product Roadmap", lastEdited: "2 weeks ago" },
  { title: "Team OKRs", lastEdited: "1 month ago" },
];

const RecentDocuments = () => {
  return (
    <section className="px-6 py-8">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        Recent Documents
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {documents.map((doc, index) => (
          <DocumentCard key={index} title={doc.title} lastEdited={doc.lastEdited} />
        ))}
      </div>
    </section>
  );
};

export default RecentDocuments;
