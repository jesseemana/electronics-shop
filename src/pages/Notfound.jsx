import React, { useEffect } from 'react';

export const Notfound = () => {
  useEffect(() => {
    document.title = 'Page Not Found';
  });

  return <div>Page Not Found</div>;
};
