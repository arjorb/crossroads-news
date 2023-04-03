const ArticleModal = ({ modal, handleCloseModal, info }) => {
  const articleInfo = info[0];
  return (
    <>
      {modal && (
        <div id="overlay" onClick={handleCloseModal} className="fixed top-0 left-0  w-full h-screen bg-black/70 flex justify-center items-center">
          <div className="bg-white w-7/12 h-[84vh] rounded-lg p-5">
            <img src={articleInfo.urlToImage} alt="" className=" h-80 object-cover w-full rounded-lg" />
            <h1 className="text-xl font-bold text-[#01010] my-3">{articleInfo.title}</h1>
            <p className="text-sm text-[#333]">{articleInfo.description}</p>
            <p className="text-sm text[#666] my-2">Publisher: {articleInfo.source.name}</p>
            <a href={articleInfo.url} target="_blank" className="py-3 px-5 bg-gradient-to-r from-emerald-400 to-cyan-400 text-white rounded-sm">
              Read More
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default ArticleModal;
