import React from "react";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import {toast} from "react-toastify";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user-info");
    localStorage.removeItem("loggedInUser");
    toast.success("Logged out Successfully");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  }

  const user = JSON.parse(localStorage.getItem("user-info"));
  const initial = user?.name?.charAt(0).toUpperCase() || "";

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-sm relative ">
      <div className="flex items-center space-x-2">
        <img
          src="https://www.svgrepo.com/show/223052/forms-document.svg"
          alt="Logo"
          className="w-8 h-8"
        />
        <h1 className="text-xl font-semibold text-gray-800">DocNova</h1>
      </div>
      <div className="flex items-center space-x-6 md:w-[60vw] sm:w-auto mx-auto gap-4">
        <input
          type="text"
          placeholder="Search documents"
          className="border border-gray-300 rounded-lg px-4 py-2 w-full outline-none "
        />
      </div>
      <div
        className="w-10 h-10 rounded-full bg-fuchsia-700 flex items-center justify-center text-white font-bold cursor-pointer "
        onClick={toggleDropdown}
      >
        {initial}
      </div>
      {isDropdownOpen && (
        <div className="absolute right-0 mt-[100px] w-48 bg-red-500  border border-gray-300 rounded-lg shadow-lg">
          <button
            className="block w-full text-left px-4 py-2 text-white hover:bg-red-600"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
