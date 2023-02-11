import { useEffect } from 'react';

export const Notfound = () => {
  useEffect(() => {
    document.title = 'Page Not Found';
  });

  return <div className='flex items-center justify-center text-5xl flex-col p-5 gap-y-4 h-[100vh]'>Page Not Found</div>;
};
