import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";
import BadgeItem from '../ui/BadgeItem';
const Badge = () => {
  return (
    <div className="flex items-center gap-4">
    <div><HiOutlineChevronLeft/></div>
    <div className='flex gap-4  overflow-x-auto'>
        <BadgeItem name='Gaming' />
        <BadgeItem name='User Interface Design' />
        <BadgeItem name='Chill-out music' />
        <BadgeItem name='comedy' />
        <BadgeItem name='New to you' />
        <BadgeItem name='Recently uploaded' />
        <BadgeItem name='comedy' />
        <BadgeItem name='New to you' />
        <BadgeItem name='Recently uploaded' />
        <BadgeItem name='comedy' />
        <BadgeItem name='New to you' />
        <BadgeItem name='Recently uploaded' />
        <BadgeItem name='comedy' />
        <BadgeItem name='New to you' />
        <BadgeItem name='Recently uploaded' />
        <BadgeItem name='comedy' />
        <BadgeItem name='New to you' />
        <BadgeItem name='Recently uploaded' />
        <BadgeItem name='comedy' />
        <BadgeItem name='New to you' />
        <BadgeItem name='Recently uploaded' />
        <BadgeItem name='comedy' />
        <BadgeItem name='New to you' />
        <BadgeItem name='Apple' />
      </div>
      <div><HiOutlineChevronRight/></div>
      </div>
  )
}

export default Badge;