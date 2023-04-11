const ArticleItem = ({ urlToImage, title, publishedAt, handleSingleArticle }) => {
  return (
    <div onClick={handleSingleArticle} className="mt-16 max-w-[295px] h-52 bg-[#F6F6F7] rounded-md overflow-hidden relative cursor-pointer ">
      <img src={urlToImage} alt="" className="w-full object-cover" />
      <div className="backdrop-blur-3xl bg-white/3 absolute bottom-0 w-full rounded-md px-2 text-sm">
        <h1 className="font-semibold">{title.substring(0, 60)}...</h1>
        <p className="mt-2 text-[12px] font-medium">{publishedAt}</p>
      </div>
    </div>
  );
};

export default ArticleItem;
