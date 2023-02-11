import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { dummydata } from '../dummydata';
import { FaAngleRight, FaDotCircle, FaStar, FaStarHalf } from 'react-icons/fa';


// ADD TO CART AND ADD TO FAVORITES TOASTS 


export const ProductDetails = () => {
  const {id} = useParams();

  const [ item, setItem ] = useState( '' );
  const [ title, setTitle ] = useState( '' );
  const [ specs, setSpecs ] = useState( [] );
  const [ quantity, setQuantity ] = useState( 0 );
  const [ category, setCategory ] = useState( '' );


  // console.log(specs)
  // console.log(item);
  
  useEffect(() => {
    const item = dummydata.find( ( item ) => item.id === parseInt( id ) );
    setItem(item);
    setTitle( item.name );
    setSpecs( item.specs );
    setCategory( item.category );
  }, [id]);
  

  useEffect(() => {
    document.title = title;
  } );
  

  const addToCart = () => {
    alert('Added To Cart');
  }

  const addToFavs = () => {
    alert('Added To Favorites');
  }
  
  return (
    <div className='px-8 border-red-500 '>

      {/* NAVIGATION  */}
      <div className='flex items-center gap-x-2 py-8 uppercase text-[12px] md:text-sm text-gray-500'>
        <Link to='/'>Home</Link>
        <FaAngleRight/>
        <Link to='/latest'>Latest Additions</Link>
        <FaAngleRight/>
        <p>{category}</p>
        <FaAngleRight/>
        <p>{title}</p>
      </div>

      <div className='flex flex-col gap-y-10 gap-x-5 py-5'>

        {/* IMAGE ITEM, PRICE, QUANTIY, DESCRIPTION  */}
        <div className='flex flex-col gap-y-10 md:flex-row'>
        {/* ITEM IMAGES AND SPECS */ }
        <div className=' w-full'>
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

          {/* PRICE AND DESCRIPTION  */}
          <p className='font-semibold md:text-xl border border-l-0 border-r-0 border-gray-300 p-2 w-full'>
            ${ item.price }
          </p>
          <p className='text-gray-500'>{ item.desc }</p>

          {/* QUANTITY CONTROLL BUTTONS  */}
          <div className='flex gap-x-4'>
            <p className='capitalize'>quantity:</p>
            <div className='flex justify-around gap-x-1'>
              <button className='border px-3 rounded-sm' onClick={() => setQuantity(prev => prev - 1)}>-</button>
              <input type="number" placeholder={quantity} className='w-[40px] outline-none px-2' />
              <button className='border px-3 rounded-sm' onClick={() => setQuantity(prev => prev + 1)}>+</button>
            </div>
          </div>

          {/* ADD TO CART AND ADD TO FAVORITES BUTTONS  */ }
          <div className='flex gap-x-4'>
            <button className='bg-[#21ABA5] text-[#ffffff] capitalize w-full rounded-sm' onClick={addToCart}>add to cart</button>
            <button className='border border-[#21ABA5] text-[#21ABA5] capitalize w-full rounded-sm' onClick={addToFavs}>add to favorites</button>
          </div>
          </div>
        </div>

        {/* ITEM SPECS, WILL LATER BE A MUI ACCORDION  */}
        <div className='md:my-4 md:ml-10 '>
          <h1 className='md:text-2xl text-gray-600 font-bold uppercase py-3'>item specs</h1>
          { specs.map( (item, index )=> {
            return (
              <ul key={ index } className='flex items-center ml-2 text-gray-500'>
                <span><FaAngleRight /></span><li className={`before:content-['']`}>{ item }</li>
              </ul>
            )
          })}
        </div>

        {/* PRODUCT RECOMMENDATIONS CAROUSEL  */}
      </div>
    </div>
  );
};
