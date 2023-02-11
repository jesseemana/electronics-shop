import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { dummydata } from '../dummydata';
import { FaAngleRight, FaStar, FaStarHalf } from 'react-icons/fa';


export const ProductDetails = () => {
  const {id} = useParams();

  const [item, setItem] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  
  // console.log(item);
  
  useEffect(() => {
    const item = dummydata.find( ( item ) => item.id === parseInt( id ) );
    setItem(item);
    setTitle( item.name );
    setCategory( item.category );
  }, [id]);

  useEffect(() => {
    document.title = title;
  });
  
  return (
    <div className='px-8 border-red-500 mb-20'>

      {/* NAVIGATION  */}
      <div className='flex items-center gap-x-2 py-8 uppercase text-[9px] md:text-sm text-gray-500'>
        <Link to='/'>Home</Link>
        <FaAngleRight/>
        <Link to='/latest'>Latest Additions</Link>
        <FaAngleRight/>
        <p>{category}</p>
        <FaAngleRight/>
        <p>{title}</p>
      </div>

      <div className='flex gap-x-5 py-5'>
        {/* ITEM IMAGES AND SPECS */ }
        <div className=' w-full ml-10'>
          <img src={item.image} alt={item.name} />
        </div>

        {/* ITEM PRICE, DESC, QUANTITY  */ }
        <div className='flex flex-col gap-y-5 w-full'>
          <div className='flex flex-col'>
          <h1 className='uppercase md:text-xl font-semibold'>{ item.name }</h1>
          <div className='flex'>
            <FaStar className='text-yellow-300' />
            <FaStar className='text-yellow-300' />
            <FaStar className='text-yellow-300' />
            <FaStar className='text-yellow-300' />
            <FaStar className='text-yellow-300'/>
          </div>
          </div>

          <p className='font-semibold md:text-xl border border-l-0 border-r-0 border-gray-300 p-2 w-full'>
            ${ item.price }
          </p>
          <p className='text-gray-500'>{item.desc}</p>
        </div>
      </div>
    </div>
  );
};
