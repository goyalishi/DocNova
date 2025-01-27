// import React from "react";
// import "./Navbar.css";

// const Navbar = ({ onLogout, onSearch }) => {
//   return (
//     <div className="navbar">
//       <div className="navbar-left">
//         <h2 className="navbar-title">DocNova</h2>
//       </div>
//       <div className="navbar-center">
//         <input
//           type="text"
//           className="search-bar"
//           placeholder="Search Documents..."
//           onChange={(e) => onSearch(e.target.value)}
//         />
//       </div>
//       <div className="navbar-right">
//         <button className="logout-btn" onClick={onLogout}>
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React from "react";
import "./Navbar.css";

const Navbar = ({ onLogout, onSearchQueryChange, onSearch }) => {
  return (
    <div className="navbar">
      <h1 className="navbar-title">DocNova</h1>
      <div className="search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search documents..."
          onChange={(e) => onSearchQueryChange(e.target.value)}
        />
        <button className="search-btn" onClick={onSearch}>
          Search
        </button>
      </div>
      <button className="logout-btn" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default Navbar;
