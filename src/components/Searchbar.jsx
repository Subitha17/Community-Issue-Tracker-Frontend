import React, { useState } from "react";
import { Search, X } from "lucide-react"; // Icons (if using lucide-react)

const Searchbar = ({ placeholder = "Search...", onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (onSearch) onSearch(value); // Live search
  };

  const clearSearch = () => {
    setQuery("");
    if (onSearch) onSearch("");
  };

  return (
    <div className="flex items-center w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-200 px-4 py-2 focus-within:ring-2 focus-within:ring-blue-500">
      <Search className="text-gray-400 w-5 h-5 mr-2" />
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400"
      />
      {query && (
        <button
          onClick={clearSearch}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default Searchbar;
