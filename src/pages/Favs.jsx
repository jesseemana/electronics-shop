import { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaAngleRight, FaDotCircle, FaStar, FaStarHalf } from 'react-icons/fa';

export const Favs = () => {
  const favorites = useSelector( state => state.storeState );

  const [favs, setFavs] = useState([])

  useEffect( () =>{
    setFavs(favorites.favorites)
  }, [favorites] )
  
  console.log( favs );
  // console.log( favorites.favorites );

  useEffect(() => {
    document.title = 'Favorites';
  });

  if (favs.length <= 0) {
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

  return <div>
    <div className='flex items-center gap-x-2 py-8 uppercase text-[12px] md:text-sm text-gray-500'>
        <Link to='/'>home</Link>
        <FaAngleRight/>
        <Link to='/latest'>favorites</Link>
    </div>
  </div>;
};
