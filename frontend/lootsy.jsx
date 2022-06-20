import React from "react";
import ReactDOM from 'react-dom';

//redux store
import configureStore from "./store/store";

//Components
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();




    ReactDOM.render(<Root store={store}/>, root);
});