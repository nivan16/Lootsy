import React from 'react';
import { Link } from 'react-router-dom';
import SessionModalContainer from '../session_modal/session_modal_container';

class NavBar extends React.Component{

    render(){
        
        return (
            <div className='nav-bar'>
                <Link to='/'>Lootsy</Link>
                <span className='search-bar-container'>
                    <input type="text" />
                </span>
                <SessionModalContainer />
                <span className='nav-bar-cart'>cart</span>
            </div>
        )
    }
}

export default NavBar;