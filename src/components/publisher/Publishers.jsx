import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";
import PublisherItem from './PublisherItem';
const Publishers = () => {
  return (
    <div className="flex items-center gap-1">
    <div className="hover:bg-[#F6F6F7] p-2.5 rounded-full cursor-pointer"><HiOutlineChevronLeft/></div>
    <div className='flex gap-4  overflow-x-auto'>
        <PublisherItem name='Gaming' />
        <PublisherItem name='User Interface Design' />
        <PublisherItem name='Chill-out music' />
        <PublisherItem name='comedy' />
        <PublisherItem name='New to you' />
        <PublisherItem name='Recently uploaded' />
        <PublisherItem name='comedy' />
        <PublisherItem name='New to you' />
        <PublisherItem name='Recently uploaded' />
        <PublisherItem name='comedy' />
        <PublisherItem name='New to you' />
        <PublisherItem name='Recently uploaded' />
        <PublisherItem name='comedy' />
        <PublisherItem name='New to you' />
        <PublisherItem name='Recently uploaded' />
        <PublisherItem name='comedy' />
        <PublisherItem name='New to you' />
        <PublisherItem name='Recently uploaded' />
        <PublisherItem name='comedy' />
        <PublisherItem name='New to you' />
        <PublisherItem name='Recently uploaded' />
        <PublisherItem name='comedy' />
        <PublisherItem name='New to you' />
        <PublisherItem name='Apple' />
      </div>
      <div className="hover:bg-[#F6F6F7] p-2.5 rounded-full cursor-pointer"><HiOutlineChevronRight/></div>
      </div>
  )
}

export default Publishers;