const PublisherItem = ({ name, id, active, handleActive }) => {
  return (
    <div
      onClick={handleActive}
      className={`px-3 py-2 min-w-max text-[#494949] text-sm rounded-md cursor-pointer  ${
        active === id ? "bg-[#797979] text-white" : "bg-[#F6F6F7] hover:bg-[#e9e9e9]"
      }`}
    >
      {name}
    </div>
  );
};

export default PublisherItem;
