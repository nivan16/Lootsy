import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

class SearchBar extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            searchQuery: ''
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidUpdate(prevProps){
        //something like if prevProps.location !=== this.props.location
        //this.props.fetchProducts(this.props.location.search.slice(2) )
        // Note: .slice(2) is to remove the "q=" part of the query string.
    }

    handleSubmit(e){
        

        //this.props.history.push({ pathname: '/search', search: `q=${this.state.searchQuery}` })
    }

    render(){

        return (
            <div className='nav-bar-search-bar-container'>
                <form className='nav-bar-search-form'>
                    <input className='nav-bar-search-bar' type="text" />

                    <button className='nav-bar-search-button'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='nav-bar-search-icon'/>
                    </button>
                </form>
            </div>
        );
    }
};

export default SearchBar;