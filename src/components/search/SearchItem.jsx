const SearchItem = ({ urlToImage, title, description }) => {
  console.log(title);
  return (
    <div className="bg-white h-14 rounded-sm mb-3 flex gap-2 items-center pl-2">
      <img src={urlToImage} alt="urlImage" className="w-10 h-10 rounded-sm bg-black object-cover" />
      <div>
        <h1 className="text-sm font-medium">{title}</h1>
        <p className="text-[12px]">{description}</p>
      </div>
    </div>
  );
};

export default SearchItem;
