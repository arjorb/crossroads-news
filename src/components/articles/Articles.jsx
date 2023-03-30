import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchArticles, getArticles } from '../../Redux/features/articles';
import ArticleItem from './ArticleItem';
import { useDispatch } from 'react-redux';

const Articles = () => {
  const dispatch = useDispatch()
  const articles = useSelector(state => state.articles.value);
  console.log(articles);

  useEffect(()=>{
    dispatch(fetchArticles());
  },[dispatch])


  return (
    <div className='flex gap-x-12 flex-wrap'>
      <ArticleItem />
      <ArticleItem />
      <ArticleItem />
      <ArticleItem />
      <ArticleItem />
      <ArticleItem />
    </div>
  );
};

export default Articles;
