import { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";
import PublisherItem from "./PublisherItem";
import { fetchArticles } from "../../Redux/features/articles";
import { fetchPublichers } from "../../Redux/features/publisher";

const Publishers = () => {
  const [active, setActive] = useState("");
  const publishRef = useRef(null);
  const dispatch = useDispatch();
  const publishers = useSelector((state) => state.publish.value);

  useEffect(() => {
    dispatch(fetchPublichers());
  }, [dispatch]);

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
    dispatch(fetchArticles(id, undefined));
  };

  const handleAllReset = () => {
    dispatch(fetchArticles());
    setActive("");
  };

  return (
    <div className="flex items-center gap-1">
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
    </div>
  );
};

export default Publishers;
