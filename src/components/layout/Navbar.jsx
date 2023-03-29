
import Search from '../ui/Search';
import Publisher from '../publisher/Publishers';
const Navbar = () => {
  return (
    <div>
      <div className='flex justify-between items-center mb-5'>
        <h1 className='text-2xl text-[#1D1D1F] font-bold cursor-pointer'>Crossroads</h1>
        <Search />
      </div>
      <Publisher/>
    </div>
  );
};

export default Navbar;
