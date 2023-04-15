import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { fetchArticles } from "../../Redux/features/articles";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";
import PublisherItem from "./PublisherItem";
import PublishersSkeleton from "./PublishersSkeleton";

const Publishers = () => {
  const [publishers, setPublishers] = useState([]);
  const [active, setActive] = useState("");
  const [loading, setLoading] = useState(true);
  const publishRef = useRef(null);
  const dispatch = useDispatch();
  const { VITE_BASE_URL, VITE_API_KEY } = import.meta.env;

  useEffect(() => {
    const getPublishers = async () => {
      setLoading(true);
      const res = await fetch(`${VITE_BASE_URL}/top-headlines/sources?apiKey=${VITE_API_KEY}`);
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
    dispatch(fetchArticles(id, null));
  };

  const handleAllReset = () => {
    dispatch(fetchArticles());
    setActive("");
  };

  return (
    <>
      {loading ? (
        <PublishersSkeleton />
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
    </>
  );
};

export default Publishers;
