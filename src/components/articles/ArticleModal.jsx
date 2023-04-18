const ArticleModal = ({ modal, handleCloseModal, info }) => {
  const articleInfo = info[0];
  return (
    <>
      {modal && (
        <div
          id="overlay"
          onClick={handleCloseModal}
          className="fixed top-0 left-0  w-full h-screen bg-black/80 dark:bg-white/30 flex justify-center items-center"
        >
          <div className="bg-white dark:bg-[#333] w-6/12 h-[75vh] rounded-lg p-5">
            <img src={articleInfo.urlToImage} alt="" className=" h-72 object-cover w-full rounded-lg" />
            <h1 className="text-xl font-bold text-[#01010] dark:text-[#ddd] my-3">{articleInfo.title}</h1>
            <p className="text-sm text-[#333] dark:text-[#999]">{articleInfo.description}</p>
            <p className="text-sm text[#666] dark:text-slate-300 my-3">Publisher: {articleInfo.source.name}</p>
            <a href={articleInfo.url} target="_blank" className="py-2.5 px-4 bg-gradient-to-r from-emerald-400 to-cyan-400 text-white rounded-sm">
              Read More
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default ArticleModal;
