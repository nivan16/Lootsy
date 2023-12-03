import { RECEIVE_PRODUCT, REMOVE_PRODUCT } from '../../actions/product_actions';
import { RECEIVE_REVIEW, REMOVE_REVIEW } from '../../actions/review_actions';

const reviewsReducer = (state={}, action) => {
    Object.freeze(state);

    // *Will later need cases for the receival or removal of an individual review
    switch (action.type) {
        case RECEIVE_PRODUCT:
            if($.isEmptyObject(action.productInfo) || $.isEmptyObject(action.productInfo.reviews)) return {};
            return action.productInfo.reviews;

        case REMOVE_PRODUCT:
            return {};

        case RECEIVE_REVIEW:
            debugger;
            return Object.assign({}, state, action.reviewInfo.review);

        case REMOVE_REVIEW:
            let newState = Object.assign({}, state);
            delete newState[action.reviewId];
            return newState;

        default:
            return state;
    }
};

export default reviewsReducer;

// *Reviews will not exist in the case of a Product Index

// case RECEIVE_PRODUCTS:
//     //if there are no products, return empty object *in the case of an empty search*
//     //also if there are products, but *no reviews*, return empty object 
//     if($.isEmptyObject(action.productInfo) || $.isEmptyObject(action.productInfo.reviews)) return {};
//     return action.productInfo.reviews;