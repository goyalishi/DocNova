import React from "react";

const DocumentCard = ({ title, lastEdited,onClick,className }) => {
  return (
    <div onClick ={onClick} className={`bg-white rounded-lg shadow-md p-4 hover:shadow-lg ${className}`}>
      <h4 className="text-lg font-medium text-gray-800">{title}</h4>
      <p className="text-sm text-gray-500 mt-1 flex items-center space-x-2">
        <span className="icon">📄</span>
        <span>Last edited {lastEdited}</span>
      </p>
      <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
        <span className="icon">⋮</span>
      </button>
    </div>
  );
};

export default DocumentCard;
