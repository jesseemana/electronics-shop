import { Search } from './Search';
import { Link } from 'react-router-dom';
import { BiHeart, BiUser } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai';

export const Navbar = () => {
  return (
    <div className='flex flex-col p-3 shadow-lg gap-y-3 bg-[#21ABA5] relative'>
      <div className='flex items-center justify-between '>
        <Link
          to='/'
          className='text-lg md:text-2xl text-[#FFFFFF] font-semibold uppercase'
        >
          shopperz.
        </Link>

        <div className='hidden md:block'>
          <Search />
        </div>

        <div className='flex gap-x-5'>
          <Link to='/favorites' className='flex relative'>
            <BiHeart className='nav-icons' />
            <span className='text-[12px] bg-[#1D566E] text-[#FFFFFF] rounded-full px-2 absolute bottom-3 left-3'>
              0
            </span>
          </Link>
          <Link to='/cart' className='flex relative'>
            <AiOutlineShoppingCart className='nav-icons' />
            <span className='text-[12px] bg-[#1D566E] text-[#FFFFFF] rounded-full px-2 absolute bottom-3 left-4'>
              0
            </span>
          </Link>
          <Link to='/user'>
            <BiUser className='nav-icons' />
          </Link>
        </div>
      </div>
      <div className='md:hidden'>
        <Search />
      </div>
    </div>
  );
};
