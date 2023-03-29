import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";
import PublisherItem from './PublisherItem';
const Publishers = () => {
  return (
    <div className="flex items-center gap-1">
    <div className="hover:bg-[#F6F6F7] p-2.5 rounded-full cursor-pointer"><HiOutlineChevronLeft/></div>
    <div className='flex gap-4  overflow-x-auto'>
      {['Gaming','User Interface Design','Chill-out music','comedy','New to you','New to you','Recently uploaded','comedy','New to you','New to you','Recently uploaded'].map((item,index) => <PublisherItem key={index} item={item} />)}
      </div>
      <div className="hover:bg-[#F6F6F7] p-2.5 rounded-full cursor-pointer"><HiOutlineChevronRight/></div>
      </div>
  )
}

export default Publishers;