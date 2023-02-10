import { useEffect } from 'react';
import { Banner } from '../components/Banner';
import { LatestAdditions } from '../components/LatestAdditions';

export const Home = () => {
  useEffect(() => {
    document.title = 'Shopperz';
  });

  return (
    <div className=''>
      <Banner />
      <LatestAdditions />
    </div>
  );
};
