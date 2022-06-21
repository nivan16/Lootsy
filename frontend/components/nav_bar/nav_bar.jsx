import React from 'react';
import { Link } from 'react-router-dom';
import SessionModalContainer from '../session_modal/session_modal_container';

class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.openModal();
    }


    render(){
        
        return (
            <div className='nav-bar'>
                <Link to='/'>Lootsy</Link>
                <span className='search-bar-container'>
                    <input type="text" />
                </span>
                <button className='nav-bar-login' onClick={this.handleClick}>Sign in</button> 
                <span className='nav-bar-cart'>cart</span>
            </div>
        )
    }
}

export default NavBar;