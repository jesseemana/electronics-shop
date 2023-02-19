// REDUCER FUNCTION FOR HANDLING PRODUCT DETAILS COMPONENT STATE 
export const reducer = ( state, action ) =>
{
    switch ( action.type )
    {
        case 'increment':
            return { ...state, quantity: state.quantity + 1 };
        case 'decrement':
            return { ...state, quantity: state.quantity - 1 };
        case 'set_title':
            return { ...state, title: action.value };
        case 'set_product':
            return { ...state, product: action.value };
        case 'set_specs':
            return { ...state, specs: action.value };
        case 'set_category':
            return { ...state, category: action.value };
        case 'set_btn':
            return { ...state, disablebtn: action.value };
        default:
            return state;
    }
};
