import { useRef } from "react";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";
import PublisherItem from './PublisherItem';
const Publishers = () => {

  const publishRef = useRef(null);
  const boundaryRef = useRef(null);

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
 
  console.log(publishRef.current);

  return (
    <div className="flex items-center gap-1">
    <button onClick={prevSlide} className="hover:bg-[#F6F6F7] p-2.5 rounded-full cursor-pointer"><HiOutlineChevronLeft/></button>
    <div ref={publishRef} className='flex gap-4  overflow-x-auto'>
      {['Gaming','User Interface Design','Chill-out music','comedy','New to you','New to you','Recently uploaded','comedy','New to you','New to you','Recently uploaded'].map((item,index) => <PublisherItem key={index} item={item}/>)}
      </div>
      <button onClick={nextSlide} className="hover:bg-[#F6F6F7] p-2.5 rounded-full cursor-pointer"><HiOutlineChevronRight/></button>
      </div>
  )
}

export default Publishers;