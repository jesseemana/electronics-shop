import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { dummydata } from '../dummydata';
import { Product } from './Product';

// console.log(dummydata);

export const LatestAdditions = () => {
  return (
    <section className='px-10 py-10'>
      <div className='flex justify-between capitalize font-bold text-2xl text-gray-700'>
        <h1 className=''>latest additions</h1>

        <Link to='/latest' className='flex items-center gap-x-3'>
          <p>view more</p>
          <BsArrowRight />
        </Link>
      </div>

      <div className='flex gap-x-10 py-5'>
        {dummydata?.map((item) => {
          return (
            <div key={item.id}>
              <Link to='/productdetails'>
                <Product item={item} />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};
