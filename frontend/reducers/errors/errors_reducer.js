import { combineReducers } from "redux";
import productErrorsReducer from "./products_error_reducer";
import sessionErrorReducer from "./session_errors_reducer";

const errorsReducer = combineReducers({
    session: sessionErrorReducer,
    products: productErrorsReducer
});

export default errorsReducer;