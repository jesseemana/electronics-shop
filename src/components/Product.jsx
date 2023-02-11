import { useEffect } from 'react';
import { BiHeart } from 'react-icons/bi';

export const Product = ({ item }) => {
  const { image, price, name } = item;

  // function addToCart() {
  // }

  const addToCart = () => {
    alert('Item added to cart');
  };
  
  const addToFav = () => {
    alert('Item added to favorites');
  };

  // function addToFav() {
  //   alert('Item added to favorites');
  // }

  return (
    <div className='py-4 px-1 flex flex-col gap-y-2 capitalize w-[250px] border border-gray-300 rounded-md '>
      <img src={image} alt={name} className='h-[150px] ' />
      <div className='px-3 flex flex-col gap-y-2'>
        <p className='text-xl font-semibold text-gray-800'>{name}</p>
        <p className='text-lg font-bold'>${price}</p>
      </div>
      <div className='flex justify-between px-2'>
        <button
          onClick={addToCart}
          className='bg-[#1D566E] text-[#ffffff] capitalize w-[100px] rounded-sm'
        >
          add to cart
        </button>
        <button onClick={addToFav}>
          <BiHeart className='text-xl' />
        </button>
      </div>
    </div>
  );
};
