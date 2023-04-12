import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticles, searchArticles } from "../../Redux/features/articles";
import ArticleItem from "./ArticleItem";
import ArticleModal from "./ArticleModal";

const Articles = () => {
  const articles = useSelector((state) => state.articles.articles);
  const loading = useSelector((state) => state.articles.loading);
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [currentInfo, setCurrentInfo] = useState({});

  useEffect(() => {
    dispatch(fetchArticles());
  }, []);

  const handleSingleArticle = (id) => {
    const single = articles.filter((article, index) => {
      return index === id;
    });
    setCurrentInfo(single);
    setModal(true);
  };

  const handleCloseModal = (e) => {
    if (e.target.id === "overlay") {
      setModal(false);
      setCurrentInfo({});
    }
  };
  return (
    <>
      {loading ? (
        <div role="status" className="rounded-md relative flex gap-x-12 flex-wrap animate-pulse">
          <div className="relative mt-16 w-[295px] h-52 rounded-md bg-gray-400">
            <div className="backdrop-blur-3xl bg-white/50 absolute bottom-0 w-full rounded-md px-2 text-sm">
              <div className="h-2.5 bg-gray-400 rounded-md w-full my-5"></div>
              <div className="h-2 bg-gray-400 rounded-md w-full mb-2"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex gap-x-12 flex-wrap">
          {articles.map((article, id) => (
            <ArticleItem key={id} {...article} handleSingleArticle={() => handleSingleArticle(id)} />
          ))}
        </div>
      )}
      <ArticleModal modal={modal} handleCloseModal={handleCloseModal} info={currentInfo} />
    </>
  );
};

export default Articles;
