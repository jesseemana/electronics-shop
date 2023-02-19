import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MainContext } from '../components/StoreContext';

export const Favs = () => {
  const { favorites } = useContext( MainContext );
  
  // console.log( favorites );

  useEffect(() => {
    document.title = 'Favorites';
  });

  if (favorites.length <= 0) {
    return (
      <div className='flex items-center justify-center flex-col p-5 gap-y-4 h-[100vh]'>
        <div>NO SAVED ITEMS</div>
        <Link
          to='/'
          className='rounded-lg p-3  text-[#ffffff] uppercase bg-[#21ABA5]'
        >
          continue shopping
        </Link>
      </div>
    );
  }

  return <div>Favs</div>;
};
