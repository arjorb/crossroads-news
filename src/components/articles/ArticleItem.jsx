const ArticleItem = ({ urlToImage, title, publishedAt, handleSingleArticle }) => {
  return (
    <div
      onClick={handleSingleArticle}
      className="mt-16 w-[295px] h-52 bg-[#f0faff] dark:bg-[#333] rounded-md overflow-hidden relative cursor-pointer group"
    >
      <img src={urlToImage} alt="" className="w-full object-center group-hover:scale-110 duration-200" />
      <div className="backdrop-blur-3xl bg-white/20 absolute bottom-0 w-full rounded-md px-2 py-1 text-sm">
        <h1 className="font-semibold">{title.substring(0, 60)}...</h1>
        <p className="mt-2 text-[12px] font-medium">{publishedAt}</p>
      </div>
    </div>
  );
};

export default ArticleItem;
