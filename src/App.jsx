import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { Favs } from './pages/Favs';
import { Latest } from './pages/Latest';
import { UserAuth } from './pages/UserAuth';
import { Notfound } from './pages/Notfound';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProductDetails } from './pages/ProductDetails';

const App = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 5000);

  return (
    <>
      {loading ? (
        <div className='uppercase text-3xl text-center absolute top-[50%] left-[45%]'>
          Loading...
        </div>
      ) : (
        <div>
          <Navbar />
          <Routes>
            <Route path='*' element={<Notfound />} />
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/user' element={<UserAuth />} />
            <Route path='/favorites' element={<Favs />} />
            <Route path='/latest' element={<Latest />} />
            <Route path='/productdetails' element={<ProductDetails />} />
          </Routes>
          <Footer />{' '}
        </div>
      )}
    </>
  );
};

export default App;
