import { RECEIVE_PRODUCTS } from '../../actions/product_actions';

const _nullQuery = {
    query: null
}

const queryReducer = (state=_nullQuery, action) => {
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_PRODUCTS:
            return action.query;
        default:
            return state;
    }
}

export default queryReducer