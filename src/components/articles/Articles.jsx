import { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { fetchArticles} from '../../Redux/features/articles';
import ArticleItem from './ArticleItem';

const Articles = () => {
  const articles = useSelector(state => state.articles.value);
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchArticles());
  },[dispatch])
  

  return (
    <div className='flex gap-x-12 flex-wrap'>
      {articles.map((article,id) => <ArticleItem key={id} {...article} />)}
    </div>
  );
};

export default Articles;
