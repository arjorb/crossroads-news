import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import SearchModal from "./SearchModal";
const Search = () => {
  const [search, setSearch] = useState(true);
  return (
    <>
      <div className="w-[141px] h-10 bg-[#F6F6F7] rounded-md cursor-pointer flex justify-between px-2 items-center border border-transparent hover:border hover:border-indigo-400 duration-700">
        <BiSearch className="text-gray-400" size={20} />
        <span className="text-sm text-gray-400">Search</span>
        <div className="border border-gray-200 rounded-md px-1 text-sm text-gray-400">⌘ k</div>
      </div>
      <SearchModal search={search} />
    </>
  );
};

export default Search;
