import React from "react";
import ReactDOM from 'react-dom';

//Redux Store
import configureStore from "./store/store";

//Components
import Root from './components/root';



import {requestProducts, requestProduct, deleteProduct} from './actions/product_actions';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    
    //configuring the redux store
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: {
                    [window.currentUser.id]: window.currentUser
                },
                products: {},
            },
            session: {
                currentUserId: window.currentUser.id
            },
            errors: {
                session: [],
                product: [],
            }
        };

        // delete window.currentUser;
        store = configureStore(preloadedState);
    }
    else {
        store = configureStore();
    };
    //end of store config

    ReactDOM.render(<Root store={store}/>, root);
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.requestProducts = requestProducts;
    window.requestProduct = id => requestProduct(id);
    window.deleteProduct = id => deleteProduct(id);
});
// last day of this project (during school) was july 1st.
// https://trello.com/b/NLdAVrw9/naran-ivanchukov