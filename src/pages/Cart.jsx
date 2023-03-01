import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';
import { clearCart, decreaseCart, increaseCart, removeFromCart } from '../features/storeSlice';
import toast from 'react-hot-toast';


export const Cart = () => {
  const [ shippingFee, setShipping ] = useState( 15 );
  const dispatch = useDispatch();
  const storeState = useSelector( ( state ) => state.storeState );


  // GETTING CART SUBTOTAL 
  const totalPrice = () => {
    let total = 0;
    storeState.cartItems.forEach((item) => {
      total += item.itemQuantity * item.price;
    } );
    
    return total.toFixed(2);
  };

  const checkout = async() => {
    try {
      
    } catch (error) {
      console.log( `Failed to fect data: ${error}`);
    }
  }


  useEffect(() => {
    document.title = 'Cart';
  }, []);


  const handleRemove = ( item ) => {
    dispatch( removeFromCart( item ) );
    toast.success( 'item removed' );
  };


  if (storeState.cartItems.length === 0) {
    return (
    <div className='px-8'>
      <div className='flex items-center gap-x-2 py-8 uppercase text-[12px] md:text-sm text-gray-500'>
        <Link to='/'>home</Link>
        <FaAngleRight/>
        <h1>cart</h1>
      </div>
        
      <div className='flex items-center justify-center flex-col gap-y-4 h-[100vh]'>
        <div>CART EMPTY</div>
        <Link
          to='/'
          className='rounded-sm px-2 py-2 text-[#ffffff] uppercase bg-[#21ABA5]'
        >
          continue shopping
        </Link>
        </div>
      </div>
    );
  };


  return (
    <div className='px-8 bg-gray-10'>
      <div className='flex items-center gap-x-2 py-8 uppercase text-[12px] md:text-sm text-gray-500'>
        <Link to='/'>home</Link>
        <FaAngleRight/>
        <h1>cart</h1>
      </div>

      <div className='flex flex-col lg:flex-row gap-x-5 mb-5'>
        <div className='py-8 flex flex-col gap-y-10'>
          { storeState.cartItems.map( ( item ) =>
          {
          return (
            <div key={ item.id } className='flex gap-x-3 md:grid md:grid-cols-3 border bg-[#ffffff] shadow-md py-3 px-2'>
              <img src={ item.image } alt={ item.name } className='h-[100px] md:h-[120px] lg:h-[180px]' />
              <div className='flex flex-col gap-y-5'>
                <h1 className='font-bold text-md md:text-xl text-gray-600' >{ item.name}</h1>
                <div className='flex flex-col gap-y-5'>
                  <div className='flex max-h-[30px] gap-x-2 '>
                    <button onClick={ () => dispatch( decreaseCart( item ) ) } className='border px-3 rounded-sm'>-</button>
                    <p>{item.itemQuantity }</p>
                    <button onClick={ () => dispatch( increaseCart( item ) ) } className='border px-3 rounded-sm'>+</button>
                  </div>
                  <p className='font-bold text-md md:text-xl text-[#21ABA5]'>${item.price * item.itemQuantity }</p>
                  <button onClick={ () => handleRemove(item)  } className='bg-red-600 text-[#ffffff] capitalize w-[100px] md:w-[150px] rounded-sm'>remove </button>
                </div>
              </div>
            </div>
          )
          })}
        </div>
        
        {/* ORDER SUMMARY */}
        <div className='border lg:mt-8 px-8 flex flex-col gap-y-[30px] h-[350px] rounded-md shadow-lg'>
          <h1 className='font-bold uppercase text-2xl border border-t-0 border-r-0 border-l-0 py-2'>order summary</h1>
          <div className=''>
            <div className='flex justify-between'>
              <p className='text-lg text-gray-600  font-semibold capitalize'>cart total:</p> <span className='text-[#21ABA5]'>${ totalPrice() }</span>
            </div>
            <div className='flex justify-between'>
              <p className='text-lg text-gray-600  font-semibold capitalize'>shipping: </p><span className='text-[#21ABA5]'>${ Number( shippingFee ).toFixed( 2 ) }</span>
            </div>
            <div className='flex justify-between mt-4 border border-gray-500 border-b-0 border-l-0 border-r-0'>
              <p className='text-lg text-gray-800  font-bold capitalize'>subtotal: </p><span className='text-[#21ABA5]'>${ (Number( shippingFee ) + Number( totalPrice() )).toFixed(2) }</span>
            </div>
          </div>
          <button onClick={checkout} className='font-bold text-xl uppercase bg-black text-[#ffffff] px-3 rounded-sm'>checkout</button>
          <button onClick={() => dispatch(clearCart())} className='bg-red-500 text-[#ffffff] rounded-sm uppercase font-semibold' >clear cart</button>
        </div>
      </div>
    </div>
  );
};
