import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBarContainer from './nav_bar/nav_bar_container';
import SessionModalContainer from './session_modal/session_modal_container';
import HomePageContainer from './home_page/home_page_container';
import HomePageCategories from './home_page/home_page_categories';
const App = () => (
    <>
        <Route path="/" component={NavBarContainer}/>
        <Route path='/' component={HomePageCategories} />
        <Switch>
            <Route exact path='/' component={HomePageContainer}/>
        </Switch>
        
        <SessionModalContainer />
    </>
);

export default App;