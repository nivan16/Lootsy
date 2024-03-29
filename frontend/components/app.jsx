import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import NavBarContainer from './nav_bar/nav_bar_container';
import SessionModalContainer from './session_modal/session_modal_container';
import HomePageContainer from './home_page/home_page_container';
import CategoryPageContainer from './category_page/category_page_container';
import CartContainer from './cart/cart_container';
import ProductShowContainer from './product/product_show_container';
import SearchResultsContainer from './search/search_results_container';
import Footer from './footer/footer';

const App = () => (
    <>
        <Route path="/" component={NavBarContainer}/>
        
        <Switch>
            <Route exact path='/products/:id' component={ProductShowContainer} />
            <Route exact path='/c/:category' component={CategoryPageContainer} />
            <Route exact path='/search' component={SearchResultsContainer} />
            <Route exact path='/cart' component={CartContainer} />
            <Route exact path='/' component={HomePageContainer} />
        </Switch>
        
        <Route path='/' component={Footer} />
        <SessionModalContainer />
    </>
);

export default App;