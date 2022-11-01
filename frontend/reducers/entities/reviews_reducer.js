import { RECEIVE_PRODUCT, RECEIVE_PRODUCTS, REMOVE_PRODUCT } from '../../actions/product_actions';

const reviewsReducer = (state={}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_PRODUCTS:
            //if there are no products, return empty object *in the case of an empty search*
            //also if there are products, but *no reviews*, return empty object 
            if($.isEmptyObject(action.productInfo) || $.isEmptyObject(action.productInfo.reviews)) return {};
            return action.productInfo.reviews;

        case RECEIVE_PRODUCT:
            if($.isEmptyObject(action.productInfo) || $.isEmptyObject(action.productInfo.reviews)) return {};
            return action.productInfo.reviews;

        case REMOVE_PRODUCT:
            let newState = Object.assign({}, state);
            delete newState[action.productId];
            return newState;
        default:
            return state;
    }
};

export default reviewsReducer;