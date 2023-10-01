import { RECEIVE_PRODUCTS } from '../../actions/product_actions';

const _nullQuery = {
    query: null
}

const queryReducer = (state=_nullQuery, action) => {
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_PRODUCTS:
            if(action.query === undefined) return _nullQuery;
            return action.query;
        default:
            return state;
    }
}

export default queryReducer;