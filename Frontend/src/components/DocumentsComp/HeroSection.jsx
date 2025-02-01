import React from "react";

const HeroSection = () => {
  return (
    <section className="text-center py-8 bg-gray-50 h-[35vh] flex flex-col justify-center items-center">
      <h2 className="text-4xl font-bold text-gray-800">Welcome to DocNova</h2>
      <p className="text-gray-600 mt-2 text-lg">
        Create, edit, and collaborate on documents with ease.
      </p>
      <button className="bg-blue-500 text-white px-6 py-2 mt-4 rounded-lg hover:bg-blue-600 max-w-[300px]">
        + Create New Document
      </button>
    </section>
  );
};

export default HeroSection;
