import { combineReducers } from "redux";
import productsErrorReducer from "./products_error_reducer";
import reviewsErrorReducer from "./reviews_error_reducer";
import sessionErrorReducer from "./session_errors_reducer";

const errorsReducer = combineReducers({
    session: sessionErrorReducer,
    products: productsErrorReducer,
    reviews: reviewsErrorReducer
});

export default errorsReducer;