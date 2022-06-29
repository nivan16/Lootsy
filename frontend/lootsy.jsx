import React from "react";
import ReactDOM from 'react-dom';

//Redux Store
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
            },
            errors: {
                session: []
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
});
// last day of this project (during school) was july 1st.
// https://trello.com/b/NLdAVrw9/naran-ivanchukov