import { useSelector } from 'react-redux';
import ArticleItem from './ArticleItem';

const Articles = () => {
  console.log(value)
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
