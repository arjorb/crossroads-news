import { BiSearch } from "react-icons/bi";
import { BsArrowReturnLeft } from "react-icons/bs";
import { HiArrowSmDown, HiArrowSmUp } from "react-icons/hi";
const SearchModal = ({ search, close }) => {
  return (
    <>
      {search && (
        <div id="overlay" onClick={close} className="fixed top-0 left-0  w-full h-screen bg-black/70 flex justify-center pt-20 z-50">
          <div className="relative bg-[#F6F6F7] w-5/12 h-[30vh] rounded-md p-5 overflow-hidden">
            <form action="">
              <div className="bg-white w-full border text-2xl  border-indigo-400 rounded-sm flex items-center gap-2">
                <BiSearch size={30} className="ml-2 text-indigo-400" />
                <input type="text" placeholder="Search News" className="w-full h-14 outline-none" />
              </div>
            </form>
            <div>
              <p className="text-center mt-3 text-[#888] text-[12px]">No recent searches</p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-10 bg-white shadow-black shadow-2xl px-5 py-3 text-sm flex items-center justify-between text-[#B4B4B7]">
              <div className="flex items-center gap-2 text-sm">
                <BsArrowReturnLeft />
                to enter
              </div>
              <div className="flex items-center gap-2">
                <HiArrowSmDown />
                <HiArrowSmUp />
                <p className="text-sm">to navigate</p>
              </div>
              <div className="flex gap-2">
                <p className="text-sm">Esc</p>
                <p className="text-sm">to close</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchModal;
