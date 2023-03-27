import Badge from './Badge';
import Search from './Search';
const Navbar = () => {
  return (
    <div className=''>
      <div className='flex justify-between items-center mb-5'>
        <h1 className='text-2xl text-[#1D1D1F] font-bold cursor-pointer'>Crossroads</h1>
        <Search />
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
