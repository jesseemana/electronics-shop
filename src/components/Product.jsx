import { useEffect } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { BiHeart } from 'react-icons/bi';
import toast from "react-hot-toast";
import { useDispatch, useSelector } from 'react-redux';

export const Product = ({ item }) => {
  const { image, price, name } = item;

  const dispatch = useDispatch()
  const storeState = useSelector( state => state.storeState );

  const addToCart = () => {
    toast.success('Added to cart');
  };
  
  const addToFav = () => {
    toast.success('Added to favorites');
  };


  return (
    <>
      <div className='py-2 px-1 flex flex-col gap-y-2 capitalize w-[250px] border border-gray-300 rounded-sm'>
        <img src={ image } alt={ name } className='h-[150px] ' />
        <div className='px-3 flex flex-col gap-y-2'>
          <p className='text-sm md:text-lg font-semibold text-gray-800'>{name}</p>
          <p className='text-sm md:text-lg font-bold'>${price}</p>
        </div>
        <div className='flex justify-between px-2'>
          <button
            onClick={addToCart}
            className='bg-[#1D566E] text-[15px] p-1 text-[#ffffff] capitalize w-[100px] rounded-sm'
          >
            add to cart
          </button>
          <button onClick={addToFav}>
            <BiHeart className='text-2xl text-[#1D566E]' />
            {/* <AiFillHeart className='text-2xl text-[#1D566E]' /> */}
          </button>
        </div>
      </div>
    </>
  );
};
