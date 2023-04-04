const SearchItem = ({ title }) => {
  console.log(title);
  return (
    <div className="bg-white h-14 rounded-sm mb-3 flex gap-2 items-center pl-2">
      <div className="w-10 h-10 rounded-sm bg-black"></div>
      <div>
        <h1 className="text-sm font-medium">They Did it Again</h1>
        <p className="text-[12px]">Description</p>
      </div>
    </div>
  );
};

export default SearchItem;
