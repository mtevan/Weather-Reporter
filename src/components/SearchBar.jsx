// src/components/SearchBar.jsx
import React, { useState } from "react";
import "../styles/SearchBar.css";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(city);
    setCity("");
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
