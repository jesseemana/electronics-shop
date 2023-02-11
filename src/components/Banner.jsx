import laptop from '../assets/thinkpad.webp';

export const Banner = () => {
  return (
    <div className='bg-[#21ABA5]'>
      {/* slide number 1  */}
      <div className='flex items-center justify-around py-10 px-3'>
        <div className='flex flex-col gap-y-5'>
          <h1 className='text-[#1D566E] uppercase text-7xl font-bold z-10'>
            get the best deals on electronics.
          </h1>
          <h1 className='text-gray-200 uppercase text-5xl font-[600] z-10'>
            mega summer sale
          </h1>
          <p className='text-[#ffffff] uppercase text-3xl font-semibold z-10'>
            lenovo thinkpad l490
          </p>
          <p className='text-[#ffffff] text-2xl z-10'>
           i5 8th Gen processor, 8GB RAM, 256GD SSD
          </p>
          <button className='bg-[#1D566E] w-[180px] capitalize text-[#ffffff] rounded-full py-3'>
            learn more
          </button>
        </div>
        <img src={laptop} alt='lenovo thikpad' className='h-[400px] relative' />

      </div>
      {/* slide number 2  */}
    </div>
  );
};
