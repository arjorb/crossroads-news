import { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import SearchModal from "./SearchModal";
const Search = () => {
  const [search, setSearch] = useState(false);

  const handleCloseModal = (e) => {
    if (e.target.id === "overlay") {
      setSearch(false);
    }
  };

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.metaKey && event.key === "k") {
        event.preventDefault();
        setSearch(true);
      }

      if (event.key === "Escape") {
        setSearch(false);
      }
    };
    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  return (
    <>
      <div
        onClick={() => setSearch(true)}
        className="w-[141px] h-10 bg-[#F6F6F7] rounded-md cursor-pointer flex justify-between px-2 items-center border border-transparent hover:border hover:border-indigo-400 duration-700"
      >
        <BiSearch className="text-gray-400" size={20} />
        <span className="text-sm text-gray-400">Search</span>
        <div className="border border-gray-200 rounded-md px-1 text-sm text-gray-400">
          {navigator.platform.includes("Mac") ? <span>⌘</span> : <span>Ctrl</span>} k
        </div>
      </div>
      <SearchModal search={search} close={handleCloseModal} />
    </>
  );
};

export default Search;
