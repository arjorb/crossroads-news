import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BiSearch } from "react-icons/bi";
import { BsArrowReturnLeft } from "react-icons/bs";
import { fetchArticles } from "../../Redux/features/articles";

const SearchModal = ({ search, close }) => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    input === "" ? dispatch(fetchArticles()) : dispatch(fetchArticles(null, input));
  }, [input]);

  return (
    <>
      {search && (
        <div id="overlay" onClick={close} className="fixed top-0 left-0  w-full h-screen bg-black/50 flex justify-center pt-20 z-50">
          <div className="relative bg-[#F6F6F7] dark:bg-[#333] w-5/12 h-[20vh] rounded-md p-5 overflow-hidden">
            <form onSubmit={(event) => event.preventDefault()}>
              <div className="bg-white dark:bg-[#222] w-full border text-2xl border-indigo-400 rounded-sm flex items-center gap-2">
                <BiSearch size={30} className="ml-2 text-indigo-400" />
                <input
                  type="text"
                  value={input}
                  onChange={() => setInput(event.target.value)}
                  placeholder="Search News"
                  className="w-full h-14 outline-none dark:bg-[#222] dark:text-white"
                  autoFocus
                />
              </div>
            </form>
            <div className="absolute bottom-0 left-0 w-full h-10 bg-white dark:bg-[#333] dark:shadow-white shadow-black shadow-2xl px-5 py-3 text-sm flex items-center justify-between text-[#B4B4B7]">
              <div className="flex items-center gap-2 text-sm">
                <BsArrowReturnLeft />
                to enter
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
