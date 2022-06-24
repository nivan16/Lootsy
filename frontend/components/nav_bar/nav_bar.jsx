import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogin(){
        this.props.openModal();
    }

    handleLogout(){
        this.props.logoutCurrentUser(this.props.currentUser.id);
    }

    render(){
        debugger;
        return (
            <div className='nav-bar'>
                <Link to='/'>Lootsy</Link>
                <span className='search-bar-container'>
                    <input type="text" />
                </span>
                { this.props.currentUser ? <button className='nav-bar-login' onClick={this.handleLogout}>Log out</button> : <button className='nav-bar-login' onClick={this.handleLogin}>Sign in</button> }
                <span className='nav-bar-cart'>cart</span>
            </div>
        )
    }
}

export default NavBar;