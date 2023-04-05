const SearchItem = ({ urlToImage, title, description }) => {
  return (
    <div className=" backdrop-blur-sm bg-black/10 h-14 rounded-md my-2 flex gap-2 items-center pl-2">
      <img src={urlToImage} alt="urlImage" className="w-10 h-10 rounded-lg bg-black object-cover" />
      <div>
        <h1 className="text-sm font-medium text-[#555]">{title.substring(0, 40)}...</h1>
        <p className="text-[12px] text-[#888]">{description.substring(0, 55)}...</p>
      </div>
    </div>
  );
};

export default SearchItem;
