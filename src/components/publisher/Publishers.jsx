import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { fetchArticles } from "../../Redux/features/articles";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";
import PublisherItem from "./PublisherItem";

const Publishers = () => {
  const [publishers, setPublishers] = useState([]);
  const [active, setActive] = useState("");
  const [loading, setLoading] = useState(true);
  const publishRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const getPublishers = async () => {
      setLoading(true);
      const res = await fetch("https://news-proxy.netlify.app/api/top-headlines/sources?apiKey=bfb30e19d31b4c6ea96abb07bf3ae5a1");
      const { sources } = await res.json();
      setPublishers(sources);
      setLoading(false);
    };
    getPublishers();
  }, []);

  const prevSlide = () => {
    publishRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const nextSlide = () => {
    publishRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  const handleActive = (id) => {
    setActive(id);
    dispatch(fetchArticles(id));
  };

  const handleAllReset = () => {
    dispatch(fetchArticles());
    setActive("");
  };

  return (
    <div className="flex items-center gap-1">
      {loading ? (
        <div role="status" className=" max-w-full animate-pulse">
          <div className="h-8 bg-gray-200 rounded-md dark:bg-gray-500 w-[1000px] mb-4"></div>
        </div>
      ) : (
        <>
          <button onClick={prevSlide} className="hover:bg-[#F6F6F7] p-2.5 rounded-full cursor-pointer">
            <HiOutlineChevronLeft />
          </button>
          <div ref={publishRef} className="flex gap-4 items-center overflow-x-auto">
            <p
              onClick={handleAllReset}
              className={`px-3 py-2 min-w-max text-[#494949] text-sm rounded-md cursor-pointer ${
                active === "" ? "bg-[#797979] text-white" : "bg-[#F6F6F7] hover:bg-[#e9e9e9]"
              }`}
            >
              All
            </p>
            {publishers.map((publisher) => (
              <PublisherItem key={publisher.id} {...publisher} handleActive={() => handleActive(publisher.id)} active={active} />
            ))}
          </div>
          <button onClick={nextSlide} className="hover:bg-[#F6F6F7] p-2.5 rounded-full cursor-pointer">
            <HiOutlineChevronRight />
          </button>
        </>
      )}
    </div>
  );
};

export default Publishers;
