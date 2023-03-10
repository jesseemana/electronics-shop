import { Routes, Route } from 'react-router-dom';
import { useState, Suspense, lazy } from 'react';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { Favs } from './pages/Favs';
import { Latest } from './pages/Latest';
import { UserAuth } from './pages/UserAuth';
import { Notfound } from './pages/Notfound';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProductDetails } from './pages/ProductDetails/ProductDetails';
import { Toaster } from 'react-hot-toast';
import { Success } from './pages/Success';
import { Cancel } from './pages/Cancel';

// import useSwr from 'swr';

const Phones = lazy( () => './pages/Phones' );
const Earphones = lazy(() => './pages/EarPhones');

// REACT TOSTIFY 

const App = () => {
  const [ loading, setLoading ] = useState( true );
  // const {isLoading, data, error} = useSwr()

  setTimeout(() => {
    setLoading(false);
  }, 1000);

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
            <Route path='/latest' element={ <Latest /> } />
            <Route path='/succes' element={<Success />} />
            <Route path='/cancel' element={<Cancel />} />
            <Route path='/product/:id' element={<ProductDetails />} />
          </Routes>
          <Footer />
          <Toaster />
        </div>
      )}
    </>
  );
};

export default App;
