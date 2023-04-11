import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticles, updateLoading } from "../../Redux/features/articles";
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
        <h1>Loading...</h1>
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
