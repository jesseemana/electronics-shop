import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Latest = () => {
  return (
    <div className='px-8'>
      <div className='flex items-center gap-x-2 py-5 uppercase text-sm text-gray-500'>
        <Link to='/'>Home</Link>
        <FaAngleRight/>
        <h1>Latest Additions</h1>
      </div>

      <h1 className='h-[100vh] uppercase text-center text-5xl flex items-center justify-center' >Latest Additions</h1>
      
    </div>
  );
};
