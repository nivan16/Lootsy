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
        const { userInfo } = window.currentUser;
        let preloadedState = {
            entities: {
                users: {},
                products: {},
                reviews: {},
            },
            cart: {},
            session: {},
            errors: {
                session: [],
                products: []
            }
        };

        //if the current user has a cart
        if( window.currentUser.cartItems !== undefined){
            preloadedState.cart = window.currentUser.cartItems;
        };
        
        preloadedState.entities.users[userInfo.id] = userInfo;          
        preloadedState.session.currentUserId = userInfo.id;

        store = configureStore(preloadedState);
    } //end if (currentUser) conditional
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

/* _________________Notes_________________

Change CartItemController update to update_cart,
    and change the update to just return quantity.
    Theres no reason to gather so much information
    when just updating one number, when all info
    will always be already existing in this case.
.
*/

/*
    1: npm install
    2: bundle install (ruby dependencies (or packages?) )
*/