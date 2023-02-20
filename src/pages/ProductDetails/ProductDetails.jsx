import { useEffect, useReducer, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { dummydata } from '../../dummydata';
import { FaAngleRight, FaStar } from 'react-icons/fa';
import { reducer } from './reducer'; 
import { useDispatch, useSelector } from 'react-redux';
import { AddToFavs } from '../../features/storeSlice';
import toast from "react-hot-toast";


// INITIAL COMPONENT STATE BEING HANDLED IN A SEPARATE REDUCER FUNCTION IN THE COMPONENT FOLDER
const initialState = {
  product: {},
  title: '',
  specs: [],
  category: '',
  disablebtn: false,
  quantity: 0
}



export const ProductDetails = () => {
  const { id } = useParams();

  const [ addToFavsBtn, setAddToFavsBtn ] = useState( true );
  const [ favorites, setFavorites ] = useState( [] );
  const [ duplicate, setDuplicate ] = useState( false );

  const [ state, dispatch ] = useReducer( reducer, initialState );
  
  const new_dispatch = useDispatch();
  const storeState = useSelector( ( state ) => state.storeState );

  const itemId = state.product.id;
  
  useEffect( () => {
    setFavorites( storeState.favorites );
  }, [ storeState ] );


  const item = favorites.find( ( item ) => item.id === itemId );
  console.log( item );
  
  useEffect( () => {
    if ( item) {
      if ( item.itemExists ) {
        setDuplicate( true );
      }
    }
  }, [item] );
  
  console.log( duplicate );


  // console.log( favorites );
  // console.log( storeState );

  // DISABLING DECREMENT BUTTON IF ITEM QUANTITY IS LESS THAN OR EQUAL TO ZERO 
  const activateBtn = state.quantity > 0

  useEffect( () => {
    if ( activateBtn ) {
      dispatch( { type: 'set_btn', value: true } );
    } else {
      dispatch( { type: 'set_btn', value: false } );
    }
  }, [ activateBtn ] );
  


  useEffect(() => {
    const item = dummydata.find( ( item ) => item.id === parseInt( id ) );
    dispatch( { type: 'set_product', value: item } );
    dispatch( { type: 'set_title', value: item.name } );
    dispatch( { type: 'set_specs', value: item.specs } );
    dispatch( { type: 'set_category', value: item.category } );
  }, [id]);
  

  // CHANING PAGE TITLE TO SELECTED ITEM
  useEffect(() => {
    document.title = state.title;
  });
  

  // ADDING ITEM TO CART 
  const handleCart = ( item ) => {
    toast.success( 'added to cart' );
  };

  // ADDING ITEM TO FAVORITES 
  const handleFavs = (item) => {
    new_dispatch( AddToFavs( item ) );
    setDuplicate( true );
    toast.success( 'Added To Favorites' );
  };

  
  return (
    <div className='px-8'>

      {/* NAVIGATION  */}
      <div className='flex items-center gap-x-2 py-8 uppercase text-[12px] md:text-sm text-gray-500'>
        <Link to='/'>home</Link>
        <FaAngleRight/>
        <Link to='/latest'>new arrivals</Link>
        <FaAngleRight/>
        <p>{state.category}</p>
        <FaAngleRight/>
        <p>{state.title}</p>
      </div>

      <div className='flex flex-col gap-y-10 gap-x-5 py-5'>

        {/* IMAGE ITEM, PRICE, QUANTIY, DESCRIPTION  */}
        <div className='flex flex-col gap-y-10 md:flex-row gap-x-10'>

        {/* ITEM IMAGES AND SPECS */ }
        <div className=' w-full'>
          <img src={state.product.image} alt={state.product.name} />
        </div>

        {/* ITEM PRICE, DESC, QUANTITY  */ }
        <div className='flex flex-col gap-y-5 w-full'>
            <div className='flex flex-col'>
              <h1 className='uppercase md:text-xl font-semibold'>{ state.product.name }</h1>
              <div className='flex'>
                <FaStar className='text-yellow-300' />
                <FaStar className='text-yellow-300' />
                <FaStar className='text-yellow-300' />
                <FaStar className='text-yellow-300' />
                <FaStar className='text-yellow-300'/>
              </div>
            </div>

          {/* PRICE AND DESCRIPTION  */}
          <p className='font-semibold text-xl md:text-2xl text-[#21ABA5] border border-l-0 border-r-0 border-gray-300 p-2 w-full'>
            ${ state.product.price }
          </p>
          <p className='text-gray-500'>{ state.product.desc }</p>

          {/* QUANTITY CONTROLL BUTTONS  */}
          <div className='flex gap-x-4'>
            <p className='capitalize'>quantity:</p>
              <div className='flex justify-around gap-x-1'>
                {/* // setQuantity(prev => prev - 1) */}
                <button
                  disabled={ !state.disablebtn }
                  className={ `${!activateBtn ? 'cursor-not-allowed border px-3 rounded-sm' : 'border px-3 rounded-sm'}`}
                  onClick={ () => dispatch( { type: 'decrement' } ) }>
                  -
                </button> 
                <p className='outline-none px-2 border'>{ state.quantity }</p>
                <button
                  className='border px-3 rounded-sm'
                  onClick={ () => dispatch( { type: 'increment' } ) }
                >
                  +
                </button>
            </div>
          </div>

          {/* ADD TO CART AND ADD TO FAVORITES BUTTONS  */ }
          <div className='flex gap-x-4'>
              <button
                className='bg-[#21ABA5] text-[#ffffff] capitalize w-full rounded-sm'
                onClick={ () => handleCart( state.product ) }
              >
                add to cart
              </button>
              <button
                disabled={duplicate}
                className={`${!addToFavsBtn ? 'cursor-not-allowed border border-[#21ABA5] text-[#21ABA5] capitalize w-full rounded-sm' : 'border border-[#21ABA5] text-[#21ABA5] capitalize w-full rounded-sm'}`}
                onClick={ () => handleFavs( state.product ) }
              >
                add to favorites
              </button>
          </div>
          </div>
        </div>

        {/* ITEM SPECS, WILL LATER BE A MUI ACCORDION  */}
        <div className='md:my-4 md:ml-10 '>
          <h1 className='md:text-2xl text-gray-800 font-bold uppercase py-3'>key features</h1>
          { state.specs.map( (item, index )=> {
            return (
              <ul key={ index } className='flex items-center text-gray-800'>
                <li className={`before:content-['•'] before:mx-2 before:rounded-full`}>{ item }</li>
              </ul>
            )
          })}
        </div>

        {/* PRODUCT RECOMMENDATIONS CAROUSEL  */}
      </div>
    </div>
  );
};
