import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons'

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
                        
                        
                        <div className='nav-bar-search-bar-container'>
                            <form className='nav-bar-search-form'>
                                <input className='nav-bar-search-bar' type="text" />

                                <button className='nav-bar-search-button'>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} className='nav-bar-search-icon'/>
                                </button>
                            </form>
                        </div>

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
                                <FontAwesomeIcon icon={faCartShopping} className='nav-bar-cart-icon' />
                            </div>
                        </div>
                    </div>
                </header>
                
                {/* Item Category Bar */}
                <div className='category-bar-border'>
                    <div className='category-bar-wrapper max-body-width body-padding'>
                        <nav className='category-bar'>
                            <Link to='/'>
                                <span className='category-bar-type'>
                                    Weapons
                                </span>
                            </Link>
                            <Link to='/'>
                                <span className='category-bar-type'>
                                Jewelry & Accessories 
                                </span>
                            </Link>
                            <Link to='/'>
                                <span className='category-bar-type'>
                                    Clothing & Armor
                                </span>
                            </Link>
                            <Link to='/'>
                                <span className='category-bar-type'>
                                    Art & Collectables
                                </span>
                            </Link>
                            <Link to='/'>
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