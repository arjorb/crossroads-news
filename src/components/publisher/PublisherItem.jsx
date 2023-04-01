const PublisherItem = ({ name,id,retreivePublisher }) => {
  return <div onClick={() =>retreivePublisher(id)} className='px-3 py-2 min-w-max bg-[#F6F6F7] text-[#494949] text-sm rounded-md cursor-pointer hover:bg-[#ebebeb]'>{name}</div>;
};

export default PublisherItem;
