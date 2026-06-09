
import { Search } from "lucide-react";

const SearchBar = ({ className = "" }) => {
  return (
    <div className={`mx-auto flex justify-center mt-5 ${className}`}>
      
      <div className="w-[90%] flex items-center bg-white shadow-md border border-red-500 rounded-xs overflow-hidden">

        {/* Input */}
        <input
          type="text"
          placeholder="What are you looking for ?"
          className="w-full px-4  text-sm outline-none"
        />

        {/* Button */}
        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 flex items-center justify-center transition">
          <Search size={20} />
        </button>

      </div>

    </div>
  );
};

export default SearchBar;