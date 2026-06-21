import { Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ className = "" }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!query.trim()) return;

    // Navigate to shop page with query
    navigate(`/shop?search=${encodeURIComponent(query)}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={`mx-auto flex justify-center mt-5 ${className}`}>
      <div className="w-[90%] flex items-center bg-white shadow-md border border-red-500 rounded-sm overflow-hidden">

        {/* Input */}
        <input
          type="text"
          placeholder="What are you looking for?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full px-4 text-sm outline-none py-2"
        />

        {/* Button */}
        <button
          onClick={handleSearch}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 flex items-center justify-center transition"
        >
          <Search size={20} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;