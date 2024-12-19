import { IoMdSearch } from "react-icons/io";

const SearchBar = ({ setSearchString }) => {
  return (
    <div className="relative flex place-items-center w-full h-9 text-base text-text-dark">
      <IoMdSearch className="absolute left-2 z-30" />
      <input
        type="text"
        className="w-full h-full px-7 py-1 bg-accent-gray-light rounded-lg drop-shadow-lg border-2 border-accent-gray-light focus:outline-none focus:border-accent-gray-dark transition-colors duration-300 ease-in-out"
        placeholder="Search Pokemon names..."
        onChange={(e) => setSearchString(e.target.value.toLowerCase())}
      />
    </div>
  );
};

export default SearchBar;
