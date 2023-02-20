import {useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Cart = () => {
  const [ cart, setCart ] = useState( [] );
  
  const storeState = useSelector( ( state ) => state.storeState );

  useEffect( () => {
    setCart( storeState.cartItems );
  }, [ storeState ] );

  useEffect(() => {
    document.title = 'Cart';
  });

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

  return <div>Cart</div>;
};
