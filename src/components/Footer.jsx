import { useEffect, useState } from 'react';
import { BsTwitter, BsInstagram, BsFacebook, BsYoutube } from 'react-icons/bs';

// absolute bottom-0 right-0

export const Footer = () => {
  const [year, setYear] = useState();

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYear(currentYear);
  });

  return (
    <section id='footer'
      className='flex flex-col gap-y-20 md:flex-row justify-between py-10 px-10 bg-[rgb(33,171,165)]  w-full text-[#FFFFFF]'>
      <div className='flex flex-col gap-y-10 md:flex-row gap-x-[80px]'>
        <div>
          <h1 className='text-[22px] capitalize'>shop by category</h1>
          <ul className='capitalize text-gray-300'>
            <li>
              <a href=''>phones</a>
            </li>
            <li>
              <a href=''>computers</a>
            </li>
            <li>
              <a href=''>TVs</a>
            </li>
            <li>
              <a href=''>gaming</a>
            </li>
            <li>
              <a href=''>earphones</a>
            </li>
            <li>
              <a href=''>smart watches</a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className='text-[22px] capitalize'>about</h1>
          <ul className='capitalize text-gray-300'>
            <li>
              <a href=''>contact us</a>
            </li>
            <li>
              <a href=''>about us</a>
            </li>
            <li>
              <a href=''>careers</a>
            </li>
            <li>
              <a href=''>press</a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className='text-[22px] capitalize'>policy</h1>
          <ul className='capitalize text-gray-300'>
            <li>
              <a href=''></a>return policy
            </li>
            <li>
              <a href=''>terms of use</a>
            </li>
            <li>
              <a href=''>sitemap</a>
            </li>
            <li>
              <a href=''>security</a>
            </li>
            <li>
              <a href=''>privacy</a>
            </li>
            <li>
              <a href=''>PCI/DSS compliance</a>
            </li>
          </ul>
        </div>
      </div>

      {/* SOCIALS SECTION */}
      <div className='flex flex-col items-center md:items-end'>
        {/* icons */}
        <div className='flex gap-x-3 md:justify-end'>
          <div className='bg-[#1D566E] rounded-full px-2 py-2'>
            <a href='#'>
              <BsTwitter className='text-lg md:text-xl text-[#21ABA5]' />
            </a>
          </div>
          <div className='bg-[#1D566E] rounded-full px-2 py-2'>
            <a href='#'>
              <BsInstagram className='text-lg md:text-xl text-[#21ABA5]' />
            </a>
          </div>
          <div className='bg-[#1D566E] rounded-full px-2 py-2'>
            <a href='#'>
              <BsFacebook className='text-lg md:text-xl text-[#21ABA5]' />
            </a>
          </div>
          <div className='bg-[#1D566E] rounded-full px-2 py-2'>
            <a href='#'>
              <BsYoutube className='text-lg md:text-xl text-[#21ABA5]' />
            </a>
          </div>
        </div>

        {/* LOCATION*/ }
        
        {/* COPYRIGHT AND ALL RIGHTS RESERVED */}
        <p className='text-ms md:text-md lg:text-lg capitalize text-center'>
          {' '}
          &copy; {year} | Shopperz all rigths reserved{' '}
        </p>
      </div>
    </section>
  );
};
