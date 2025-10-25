import React, { useState } from "react";
import Searchbar from "../components/Searchbar";

export default function SearchPage() {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");

  const handleSearch = (value) => {
    setQuery(value);
    // Example: here you could filter issues or fetch from API
    if (value.trim() === "") {
      setResults([]);
    } else {
      // Simulated static data for example purposes
      const sampleData = ["Login issue", "Server error", "UI bug", "API timeout"];
      const filtered = sampleData.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filtered);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-semibold text-center mb-6">Search Issues</h1>

      <Searchbar placeholder="Search for an issue..." onSearch={handleSearch} />

      <div className="mt-6">
        {query && results.length === 0 && (
          <p className="text-center text-gray-500">No results found for "{query}".</p>
        )}

        {results.length > 0 && (
          <ul className="space-y-2">
            {results.map((item, index) => (
              <li
                key={index}
                className="border border-gray-200 p-3 rounded-lg shadow-sm hover:bg-gray-50 transition"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
