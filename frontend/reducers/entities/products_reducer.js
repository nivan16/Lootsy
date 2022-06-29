import { RECEIVE_PRODUCT, RECEIVE_PRODUCTS, REMOVE_PRODUCT } from '../../actions/product_actions';

const productsReducer = (state={}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return action.products;
        case RECEIVE_PRODUCT:
            return Object.assign({}, state, {[action.product.id]: action.product} ) //is this better?
        default:
            break;
    }

}


export default productsReducer;