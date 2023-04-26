import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticles } from "../../Redux/features/articles";
import ArticleItem from "./ArticleItem";
import ArticleModal from "./ArticleModal";
import ArticleSkeleton from "./ArticleSkeleton";

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
    const single = articles.filter((article) => {
      return article.id === id;
    });
    setCurrentInfo(single);
    setModal(true);
  };

  const handleCloseModal = (event) => {
    if (event.target.id === "overlay") {
      setModal(false);
      setCurrentInfo({});
    }
  };

  console.log(articles);
  return (
    <>
      {loading ? (
        <ArticleSkeleton />
      ) : (
        <div className="flex gap-x-12 flex-wrap">
          {articles.map((article) => (
            <ArticleItem key={article.id} {...article} handleSingleArticle={() => handleSingleArticle(article.id)} />
          ))}
        </div>
      )}
      <ArticleModal modal={modal} handleCloseModal={handleCloseModal} info={currentInfo} />
    </>
  );
};

export default Articles;
