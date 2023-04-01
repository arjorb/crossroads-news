import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchArticles} from '../../Redux/features/articles';
import ArticleItem from './ArticleItem';
import { useDispatch } from 'react-redux';

const Articles = () => {
  const dispatch = useDispatch()
  const articles = useSelector(state => state.articles.value);

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
