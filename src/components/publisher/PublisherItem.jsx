const PublisherItem = ({ name, id, active, handleActive }) => {
  return (
    <div
      onClick={handleActive}
      className={`px-3 py-2 min-w-max text-[#494949] dark:text-[#ECECEC] text-sm rounded-md cursor-pointer  ${
        active === id
          ? "bg-[#797977] dark:bg-[#FFFFFF] text-white dark:text-[#222]"
          : "bg-[#F6F6F7] dark:bg-[#222] hover:bg-[#e9e9e9] dark:hover:bg-[#313131]"
      }`}
    >
      {name}
    </div>
  );
};

export default PublisherItem;
