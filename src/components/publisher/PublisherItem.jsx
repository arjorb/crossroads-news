const PublisherItem = ({ name, id, active, handleActive }) => {
  return (
    <div
      onClick={handleActive}
      className={`px-3 py-2 min-w-max text-sm text-white  rounded-md cursor-pointer ${
        active === id ? "bg-[#797977]  dark:bg-[#FFFFFF] dark:text-black" : "bg-[#F6F6F7] hover:bg-[#e9e9e9] dark:bg-[#222] dark:hover:bg-[#313131]"
      }`}
    >
      {name}
    </div>
  );
};

export default PublisherItem;
