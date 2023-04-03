const ArticleItem = ({urlToImage,title,publishedAt}) => {

  return (
    <div className='mt-16 w-[295px] h-52 bg-[#F6F6F7] rounded-md overflow-hidden relative '>
      <img src={urlToImage} alt='' className="w-full object-cover"/>
      <div className='bg-gray-100 absolute bottom-0 rounded-sm py-1 px-2 text-sm'>
       <h1 className="font-semibold">{title.substring(0,60)}...</h1>
       <p className="mt-2 text-[12px] font-medium">{publishedAt}</p>
      </div>
    </div>
  );
};

export default ArticleItem;
