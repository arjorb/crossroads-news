const PublisherItem = ({ name, id, active, handleActive }) => {
  return (
    <div
      onClick={handleActive}
      className={`px-3 py-2 min-w-max text-sm rounded-md cursor-pointer ${
        active === id
          ? "bg-[#797977] text-white dark:bg-[#FFFFFF] dark:text-[#222]"
          : "bg-[#F6F6F7] hover:bg-[#e9e9e9] text[#222] dark:bg-[#222] dark:hover:bg-[#313131] dark:text-white"
      }`}
    >
      {name}
    </div>
  );
};

export default PublisherItem;
