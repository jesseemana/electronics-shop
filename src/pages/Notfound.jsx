import { useEffect } from 'react';
import error from '../assets/404.png';

export const Notfound = () => {
  useEffect(() => {
    document.title = 'Page Not Found';
  });

  return <div className='flex items-center justify-center text-5xl flex-col p-5 gap-y-4'>
    <img src={error} alt="error 404 image" className='md:h-[600px] md:w-[600px]' />
  </div>;
};
