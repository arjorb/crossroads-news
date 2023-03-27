import Badge from './Badge';
const Navbar = () => {
  return (
    <div className=''>
      <div className='flex justify-between items-center mb-4'>
        <h1 className='text-2xl text-[#1D1D1F] font-bold cursor-pointer'>Crossroads</h1>
        <div type='text' className='w-[141px] h-10 bg-[#F6F6F7] rounded-md cursor-pointer'></div>
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
