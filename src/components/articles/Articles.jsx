import { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { fetchArticles} from '../../Redux/features/articles';
import ArticleItem from './ArticleItem';
import ArticleModal from './ArticleModal';

const Articles = () => {
  const articles = useSelector(state => state.articles.value);
  const dispatch = useDispatch()

  const [modal,setModal] = useState(true);

  useEffect(()=>{
    dispatch(fetchArticles());
  },[dispatch])
  

  return (
    <>
    <div className='flex gap-x-12 flex-wrap'>
      {articles.map((article,id) => <ArticleItem key={id} {...article} />)}
    </div>
    <ArticleModal modal={modal}/>
    </>
  );
};

export default Articles;
