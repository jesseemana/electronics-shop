import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';

export const Search = () => {
  const [query, setQuery] = useState('search items');
  const [loading, setLoading] = useState(false);

  const search = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      console.log(query);
    }, 4000);
  };

  return (
    <div className='flex items-center justify-between px-5 rounded-full bg-[#FFFFFF]'>
      <input
        type='text'
        placeholder={query}
        onChange={(e) => setQuery(e.target.value)}
        className='py-2 rounded-full bg-[#FFFFFF] outline-none text-gray-500'
      />
      <button onClick={search} className=''>
        <BiSearch className='text-xl text-gray-500' />
      </button>
    </div>
  );
};
