import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { BiHeart } from 'react-icons/bi';
import { dummydata } from '../dummydata';
import { Product } from './Product';

// console.log(dummydata);


export const LatestAdditions = () => {
  return (
    <section id='latest additions' className='px-4 md:px-10 py-10'>
      <div className='flex justify-between capitalize font-bold text-xl md:text-2xl text-gray-700'>
        <h1>new arrivals</h1>

        <Link to='/latest' className='flex items-center gap-x-3'>
          <p>view more</p>
          <BsArrowRight />
        </Link>
      </div>

      <div className='flex gap-x-10 py-5 overflow-x-scroll scroll'>
        {dummydata?.map((item) => {
          return (
            <div key={item.id}>
              <Link to={`/product/${item.id}`}>
                <Product item={ item } />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};
