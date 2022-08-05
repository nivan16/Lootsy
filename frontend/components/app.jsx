import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBarContainer from './nav_bar/nav_bar_container';
import SessionModalContainer from './session_modal/session_modal_container';
import HomePageContainer from './home_page/home_page_container';

const App = () => (
    <div>
        <header className='nav-bar-wrapper'>
            <Route path="/" component={NavBarContainer}/>
        </header>

        <Switch>
            <Route exact path='/' component={HomePageContainer}/>
        </Switch>
        
        <SessionModalContainer />
    </div>
);

export default App;