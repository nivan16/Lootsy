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
        this.props.logoutCurrentUser();
    }

    render(){
        return (
            <>
                {/* Main Navigation Bar */}
                <header className='nav-bar-wrapper max-body-width body-padding'>
                    <div className='nav-bar'>
                        <Link to='/'>Cutesy</Link>
                        
                        <SearchBar pathname={this.props.pathname} history={this.props.history} query={this.props.query}/>                       

                        <div className='nav-bar-button-container'>
                            <div className='nav-bar-session-button-container'>
                                { //this renders either a Login button or a (soon to be) drop down functional component with unique profile things
                                    this.props.currentUser ? (
                                        <button className='nav-bar-login' onClick={this.handleLogout}>Log Out</button> 
                                    ) : (
                                        <button className='nav-bar-login' onClick={this.handleLogin}>Sign In</button> 
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

                            <div className='category-container'>
                                <Link to='/c/bags'>
                                    <span className='category-bar-type'>
                                        Handbags & Crossbody Bags
                                    </span>
                                </Link>
                            </div>

                            <div className='category-container'>
                                <Link to='/c/plushies'>
                                    <span className='category-bar-type'>
                                        Plushies
                                    </span>
                                </Link>
                            </div>

                            <div className='category-container'>
                                <Link to='/c/phone-cases'>
                                    <span className='category-bar-type'>
                                        Phone Cases & Charms
                                    </span>
                                </Link>
                            </div>

                            

                            <div className='category-container'>
                                <Link to='/c/keychains'>
                                    <span className='category-bar-type'>
                                        Keychains 
                                    </span>
                                </Link>
                            </div>                            

                            <div className='category-container'>
                                <Link to='/c/jewelry'>
                                    <span className='category-bar-type'>
                                        Earrings & Necklaces
                                    </span>
                                </Link>
                            </div>

                            

                            <div className='category-container'>
                                <Link to='/c/gaming-accessories'>
                                    <span className='category-bar-type'>
                                        Gaming Accessories
                                    </span>
                                </Link>
                            </div>
                        </nav>
                    </div>
                </div>
            </>
        )
    }
}

export default NavBar;