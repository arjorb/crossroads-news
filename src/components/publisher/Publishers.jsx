import { useRef,useEffect } from "react";
import { useSelector,useDispatch } from 'react-redux';
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";
import PublisherItem from './PublisherItem';
import { fetchPublichers } from '../../Redux/features/publisher';

const Publishers = () => {

  const publishRef = useRef(null);
  const dispatch = useDispatch()
  const publishers = useSelector(state => state.publish.value)


  useEffect(()=>{
    dispatch(fetchPublichers());
  },[dispatch])

  const prevSlide = () =>{
    publishRef.current.scrollBy({
      left:-300,
      behavior: "smooth"
    })
    
  }

  const nextSlide = () =>{
    publishRef.current.scrollBy({
      left:300,
      behavior: "smooth"
    })
  }

  const retreivePublisher = (id) =>{
    console.log(id);
  }

  return (
    <div className="flex items-center gap-1">
    <button onClick={prevSlide} className="hover:bg-[#F6F6F7] p-2.5 rounded-full cursor-pointer"><HiOutlineChevronLeft/></button>
    <div ref={publishRef} className='flex gap-4  overflow-x-auto'>
      {publishers.map(publisher => <PublisherItem key={publisher.id}  {...publisher} retreivePublisher={retreivePublisher}/>)}
      </div>
      <button onClick={nextSlide} className="hover:bg-[#F6F6F7] p-2.5 rounded-full cursor-pointer"><HiOutlineChevronRight/></button>
      </div>
  )
}

export default Publishers;