// src/components/GoogleDocsCloneHeader.jsx
import React from "react";
import "./GoogleDocsCloneHeader.css";

const GoogleDocsCloneHeader = () => {
  return (
    <div className="google-docs-header">
      <div className="logo">
        <img src="/assets/your_logo.png" alt="DocNova Logo" />
      </div>
      <div className="user-profile">
        <img src="/assets/user_avatar.png" alt="User Avatar" />
      </div>
    </div>
  );
};

export default GoogleDocsCloneHeader;
