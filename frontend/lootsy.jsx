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
        //if user has a cart
        if(window.currentUser.cart[0]) {
            const { cart, userInfo } = window.currentUser;
            let preloadedState = {
                entities: {
                    users: {
                        [userInfo.id]: userInfo
                    },
                    products: {},
                },
                cart: {},
                session: {
                    currentUserId: userInfo.id
                },
                errors: {
                    session: [],
                    products: []
                }   
            };

            cart.forEach( ({ product, productOwner, cartItem }) => {
                preloadedState.entities.products[product.id] = product;
                preloadedState.entities.users[productOwner.id] = productOwner;
                preloadedState.cart[product.id] = cartItem;
            });

            store = configureStore(preloadedState);
        }
        //if the logged in user doesnt have a cart already
        else {
            const preloadedState = {
                entities: {
                    users: {
                        [window.currentUser.userInfo.id]: window.currentUser.userInfo
                    },
                    products: {},
                },
                session: {
                    currentUserId: window.currentUser.userInfo.id
                },
                errors: {
                    session: [],
                    products: [],
                }
            };
    
            // delete window.currentUser;
            store = configureStore(preloadedState);
        }
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