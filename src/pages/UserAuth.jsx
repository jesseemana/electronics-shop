import { useEffect } from 'react';

export const UserAuth = () => {
  useEffect(() => {
    document.title = 'Log In/Sign Up';
  });

  return <div className='h-[100vh] uppercase text-center text-5xl flex items-center justify-center'>Log In/Sign Up</div>;
};
