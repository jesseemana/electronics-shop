import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const ProductDetails = () => {
  const { id } = useParams();
  useEffect(() => {
    document.title = 'Product Description';
  });
  return (
    <div className='flex items-center justify-center text-5xl flex-col p-5 gap-y-4 h-[100vh]'>
      ProductDetails
    </div>
  );
};
