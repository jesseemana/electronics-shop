import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import { removeFromFavs } from '../features/storeSlice';

export const Favs = () => {
  const dispatch = useDispatch();
  const storeState = useSelector( ( state ) => state.storeState );

  const [ favs, setFavs ] = useState( [] );


  useEffect( () => {
    setFavs( storeState.favorites );
  }, [ storeState ] );
  

  useEffect(() => {
    document.title = 'Favorites';
  }, []);

  const handleRemove = ( item ) => {
    dispatch( removeFromFavs( item ) );
    toast.error( 'item removed' );
  };
  

  // IF THERE ARE NO ITEMS IN THE FAVORITES ARRAY 
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
  };

  return (
    <div className='px-8'>
      <div className='flex items-center gap-x-2 py-8 uppercase text-[12px] md:text-sm text-gray-500'>
        <Link to='/'>home</Link>
        <FaAngleRight/>
        <h1>favorites</h1>
      </div>

      <div></div>
      <h1 className='text-lg md:text-2xl text-center text-gray-600 capitalize font-bold'>my wishlist</h1>

      <div className='grid grid-rows lg:grid-cols-2 items-center justify-center mb-5 py-5'>
        { favs.map( item =>
        {
          return (
            <div key={ item.id } className='flex items-center justify-center py-5'>
              <div className='flex flex-col gap-y-2'>
                <img src={ item.image } alt={item.name} />
                <p className='text-gray-500 font-semibold'>{ item.name }</p>
                <p className='text-[#21ABA5] font-bold'>${ item.price }</p>
                <button
                  className='bg-red-600 px-3 py-1 text-[#ffffff] rounded-sm capitalize'
                  onClick={() => handleRemove( item ) }
                >
                  remove  from wishlist
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};
