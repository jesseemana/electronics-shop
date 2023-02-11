import { useEffect, useReducer, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { dummydata } from '../dummydata';
import { FaAngleRight, FaDotCircle, FaStar, FaStarHalf } from 'react-icons/fa';


// ADD TO CART AND ADD TO FAVORITES TOASTS


const reducer = (state, action) => {
    switch ( action.type ) { 
      case 'increment':
        return { ...state, quantity: state.quantity + 1 }
      case 'decrement':
        return { ...state, quantity: state.quantity - 1 }
      case 'set_title':
        return { ...state, title: action.value }
      case 'set_product':
        return { ...state, product: action.value }
      case 'set_specs':
        return { ...state, specs: action.value }
      case 'set_category':
        return { ...state, category: action.value }
      case 'set_btn':
        return {...state, disablebtn: action.value}
      default:
        return state
    }
}

const initialState = {
  product: {},
  title: '',
  specs: [],
  category: '',
  disablebtn: false,
  quantity: 0
}


export const ProductDetails = () => {
  const {id} = useParams();

  // const [ item, setItem ] = useState( {} );
  // const [ title, setTitle ] = useState( '' );
  // const [ specs, setSpecs ] = useState( [] );
  // const [ quantity, setQuantity ] = useState( 0 );
  // const [ category, setCategory ] = useState( '' );

  const [state, dispatch] = useReducer( reducer, initialState );


  // DISABLING DECREMENT BUTTON IF ITEM QUANTITY IS LESS THAN OR EQUAL TO ZERO 
  const activateBtn = state.quantity <= 0

  useEffect( () => {
    if ( activateBtn ){
      dispatch( { type: 'set_btn', value: true } );
    } else {
      dispatch( { type: 'set_btn', value: false } );
    }
  }, [activateBtn])
  


  useEffect(() => {
    const item = dummydata.find( ( item ) => item.id === parseInt( id ) );
    dispatch( { type: 'set_product', value: item } );
    dispatch( { type: 'set_title', value: item.name } );
    dispatch( { type: 'set_specs', value: item.specs } );
    dispatch( { type: 'set_category', value: item.category } );
  }, [id]);
  

  useEffect(() => {
    document.title = state.title;
  });
  

  const addToCart = () => {
    alert('Added To Cart');
  }

  const addToFavs = () => {
    alert('Added To Favorites');
  }

  // console.log(state.quantity)
  // console.log(initialState.quantity)
  
  return (
    <div className='px-8 border-red-500 '>

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
                <button disabled={state.disablebtn} className='border px-3 rounded-sm' onClick={ () => dispatch( { type: 'decrement' } ) }>-</button> 
                {/* <input type="number" placeholder={ mystate.quantity } className='w-[40px] outline-none px-2' /> */ }
                <p className='outline-none px-2 border'>{ state.quantity }</p>
                <button className='border px-3 rounded-sm' onClick={ () => dispatch( { type: 'increment' } ) }>+</button>
            </div>
          </div>

          {/* ADD TO CART AND ADD TO FAVORITES BUTTONS  */ }
          <div className='flex gap-x-4'>
            <button className='bg-[#21ABA5] text-[#ffffff] capitalize w-full rounded-sm' onClick={addToCart}>add to cart</button>
            <button className='border border-[#21ABA5] text-[#21ABA5] capitalize w-full rounded-sm' onClick={addToFavs}>add to favorites</button>
          </div>
          </div>
        </div>

        {/* ITEM SPECS, WILL LATER BE A MUI ACCORDION  */}
        <div className='md:my-4 md:ml-10 '>
          <h1 className='md:text-2xl text-gray-600 font-bold uppercase py-3'>key features</h1>
          { state.specs.map( (item, index )=> {
            return (
              <ul key={ index } className='flex items-center ml-2 text-gray-500'>
                <span><FaAngleRight /></span><li className={`before:content-['']`}>{ item }</li>
              </ul>
            )
          })}
        </div>

        {/* PRODUCT RECOMMENDATIONS CAROUSEL  */}
      </div>
    </div>
  );
};
