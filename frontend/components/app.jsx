import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBarContainer from './nav_bar/nav_bar_container';
import SessionModalContainer from './session_modal/session_modal_container';
import HomePageContainer from './home_page/home_page_container';
import CategoryPageContainer from './category_page/category_page_container';

const App = () => (
    <>
        <Route path="/" component={NavBarContainer}/>
        
        <Switch>
            <Route exact path='/' component={HomePageContainer}/>
            <Route exact path='/c/:category' component={CategoryPageContainer}/>
        </Switch>
        
        <SessionModalContainer />
    </>
);

export default App;