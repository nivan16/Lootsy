import React from "react";
import ReactDOM from 'react-dom';

//redux store
import configureStore from "./store/store";

//Components
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    
    //configuring the redux store
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: {
                    [window.currentUser.id]: window.currentUser
                }
            },
            session: {
                currentUserId: window.currentUser.id
            }
        };

        delete window.currentUser;
        store = configureStore(preloadedState);
    }
    else {
        store = configureStore();
    };
    //end of store config

    
    ReactDOM.render(<Root store={store}/>, root);
    window.getState = store.getState;
});