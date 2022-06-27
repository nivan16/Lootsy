import React from 'react';
import { Route } from 'react-router-dom';

import NavBarContainer from './nav_bar/nav_bar_container';
import SessionModalContainer from './session_modal/session_modal_container';



const App = () => (
    <div>
        <header className='nav-bar-wrapper'>
            <Route path="/" component={NavBarContainer}/>
        </header>

        <SessionModalContainer />
    </div>
);

export default App;