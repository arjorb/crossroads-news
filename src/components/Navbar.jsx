import { BiSearch } from 'react-icons/bi';
import Badge from './Badge';
const Navbar = () => {
  return (
    <div className=''>
      <div className='flex justify-between items-center mb-5'>
        <h1 className='text-2xl text-[#1D1D1F] font-bold cursor-pointer'>Crossroads</h1>
        <div className='w-[141px] h-10 bg-[#F6F6F7] rounded-md cursor-pointer flex justify-between px-2 items-center'>
          <BiSearch className='text-gray-400' size={20} />
          <span className='text-sm text-gray-400'>Search</span>
          <div className='border border-gray-200 rounded-md px-1 text-sm text-gray-400'>⌘ k</div>
        </div>
      </div>
      <div className='flex gap-4  overflow-x-auto'>
        <Badge name='Gaming' />
        <Badge name='User Interface Design' />
        <Badge name='Chill-out music' />
        <Badge name='comedy' />
        <Badge name='New to you' />
        <Badge name='Recently uploaded' />
        <Badge name='comedy' />
        <Badge name='New to you' />
        <Badge name='Recently uploaded' />
        <Badge name='comedy' />
        <Badge name='New to you' />
        <Badge name='Recently uploaded' />
        <Badge name='comedy' />
        <Badge name='New to you' />
        <Badge name='Recently uploaded' />
        <Badge name='comedy' />
        <Badge name='New to you' />
        <Badge name='Recently uploaded' />
        <Badge name='comedy' />
        <Badge name='New to you' />
        <Badge name='Recently uploaded' />
        <Badge name='comedy' />
        <Badge name='New to you' />
        <Badge name='Apple' />
      </div>
    </div>
  );
};

export default Navbar;
