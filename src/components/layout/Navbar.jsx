
import Search from '../ui/Search';
import Badge from './Badge';
const Navbar = () => {
  return (
    <div>
      <div className='flex justify-between items-center mb-5'>
        <h1 className='text-2xl text-[#1D1D1F] font-bold cursor-pointer'>Crossroads</h1>
        <Search />
      </div>
      <Badge/>
    </div>
  );
};

export default Navbar;
