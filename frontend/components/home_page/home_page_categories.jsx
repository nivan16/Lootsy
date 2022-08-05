import React from 'react';
import { Link } from 'react-router-dom';

class HomePageCategories extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        return (
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
        )
    }
}

export default HomePageCategories;