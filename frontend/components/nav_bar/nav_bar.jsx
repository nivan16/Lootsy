import React from 'react';
import { Link } from 'react-router-dom';

import SearchBar from './search_bar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

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
        return (
            <>
                {/* Main Navigation Bar */}
                <header className='nav-bar-wrapper max-body-width body-padding'>
                    <div className='nav-bar'>
                        <Link to='/'>Lootsy</Link>
                        
                        <SearchBar pathname={this.props.pathname} history={this.props.history}/>                       

                        <div className='nav-bar-button-container'>
                            <div className='nav-bar-session-button-container'>
                                { //this renders either a Login button or a (soon to be) drop down functional component with unique profile things
                                    this.props.currentUser ? (
                                        <button className='nav-bar-login' onClick={this.handleLogout}>Log out</button> 
                                    ) : (
                                        <button className='nav-bar-login' onClick={this.handleLogin}>Sign in</button> 
                                    )
                                
                                }
                            </div>
                            <div className='nav-bar-cart'>
                                <Link to='/cart'>
                                    <FontAwesomeIcon icon={faCartShopping} className='nav-bar-cart-icon' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </header>
                
                {/* Item Category Bar */}
                <div className='category-bar-border'>
                    <div className='category-bar-wrapper max-body-width body-padding'>
                        <nav className='category-bar'>
                            <Link to='/c/weapons'>
                                <span className='category-bar-type'>
                                    Weapons
                                </span>
                            </Link>
                            <Link to='/c/jewelry-and-accessories'>
                                <span className='category-bar-type'>
                                Jewelry & Accessories 
                                </span>
                            </Link>
                            <Link to='/c/clothing-and-armor'>
                                <span className='category-bar-type'>
                                    Clothing & Armor
                                </span>
                            </Link>
                            <Link to='/c/art-and-collectables'>
                                <span className='category-bar-type'>
                                    Art & Collectables
                                </span>
                            </Link>
                            <Link to='/c/miscellaneous'>
                                <span className='category-bar-type'>
                                    Miscellaneous
                                </span>
                            </Link>
                        </nav>
                    </div>
                </div>
            </>
        )
    }
}

export default NavBar;