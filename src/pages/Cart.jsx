import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';
import { decreaseCart, increaseCart, removeFromCart } from '../features/storeSlice';
import toast from 'react-hot-toast';


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


  console.log( cart );

  const handleRemove = (item) => {
    dispatch( removeFromCart( item ) );
    toast.success( 'item removed' );
  }


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

      <div className='py-8 flex flex-col gap-y-10'>
        { cart.map( ( item ) =>
        {
          return (
            <div key={ item.id } className='flex gap-x-3 md:grid md:grid-cols-4 border py-3 px-2'>
              <img src={ item.image } alt={ item.name } className='h-[100px] md:h-[120px] lg:h-[180px]' />
              <div className='flex flex-col gap-y-5'>
                <h1 className='font-bold text-md md:text-xl text-gray-600' >{ item.name}</h1>
                <div className='flex flex-col gap-y-5'>
                  <div className='flex max-h-[30px] gap-x-2 '>
                    <button onClick={ () => dispatch( decreaseCart( item ) ) } className='border px-3 rounded-sm'>-</button>
                    <p>{item.itemQuantity }</p>
                    <button onClick={ () => dispatch( increaseCart( item ) ) } className='border px-3 rounded-sm'>+</button>
                  </div>
                  <p className='font-bold text-md md:text-xl'>${item.price * item.itemQuantity }</p>
                  <button onClick={ () => handleRemove(item)  } className='bg-red-600 text-[#ffffff] capitalize w-[100px] md:w-[150px] rounded-sm'>remove </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};
