import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';

export const Cart = () => {
  const [ cart, setCart ] = useState( [] );

  const dispatch = useDispatch();
  const storeState = useSelector( ( state ) => state.storeState );

  useEffect( () => {
    setCart( storeState.cartItems );
  }, [ storeState.cartItems ] );

  useEffect(() => {
    document.title = 'Cart';
  }, []);


  // console.log( cart );


  if (cart.length === 0) {
    return (
      <div className='flex items-center justify-center flex-col p-5 gap-y-4 h-[100vh]'>
        <div>CART EMPTY</div>
        <Link
          to='/'
          className='rounded-lg p-3 text-[#ffffff] uppercase bg-[#21ABA5]'
        >
          continue shopping
        </Link>
      </div>
    );
  }

  return (
    <div className='px-8'>
      <div className='flex items-center gap-x-2 py-8 uppercase text-[12px] md:text-sm text-gray-500'>
        <Link to='/'>home</Link>
        <FaAngleRight/>
        <h1>favorites</h1>
      </div>

      <h1 className='text-lg md:text-3xl text-center text-gray-600 font-semibold'>CART</h1>

      <div>
        
      </div>
    </div>
  );
};
