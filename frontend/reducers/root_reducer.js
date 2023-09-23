import { combineReducers } from "redux";

import cartReducer from './cart/cart_reducer';
import entitiesReducer from "./entities/entities_reducer";
import modalReducer from "./ui/modal_reducer";
import sessionReducer from "./session/session_reducer";
import errorsReducer from "./errors/errors_reducer";
import queryReducer from "./entities/query_reducer";

const rootReducer = combineReducers({
    cart: cartReducer,
    entities: entitiesReducer,
    session: sessionReducer,
    query: queryReducer,
    errors: errorsReducer,
    modal: modalReducer,
})

export default rootReducer;