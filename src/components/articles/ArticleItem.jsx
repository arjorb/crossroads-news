const ArticleItem = ({ urlToImage, title, publishedAt, handleSingleArticle }) => {
  return (
    <div onClick={handleSingleArticle} className="mt-16 w-[295px] h-52 bg-[#f0faff] rounded-md overflow-hidden relative cursor-pointer">
      <img src={urlToImage} alt="urlImage" className="w-full object-cover hover:scale-110 duration-300" />
      <div className="backdrop-blur-3xl absolute bottom-0 w-full rounded-md px-2 py-1 text-sm">
        <h1 className="font-semibold">{title.substring(0, 60)}...</h1>
        <p className="mt-2 text-[12px] font-medium">{publishedAt}</p>
      </div>
    </div>
  );
};

export default ArticleItem;
