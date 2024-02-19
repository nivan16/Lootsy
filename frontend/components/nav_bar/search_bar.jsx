import React from "react";

import { FaMagnifyingGlass } from "react-icons/fa6";

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchQuery: ""
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }
    handleChange(e){
        e.stopPropagation();

        this.setState({
            searchQuery: e.target.value
        });
    }

    handleSearch(e){        
        e.preventDefault();
        
        this.props.history.push({
            pathname: '/search',
            search: `q=${this.state.searchQuery}`
        });
    }

    

    componentDidMount(){
        if(this.props.query !== undefined && this.props.pathname === '/search'){
            var searchQueryCopy = ('' + this.props.history.location.search).slice(3);
            this.setState({
                searchQuery: searchQueryCopy
            });
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.pathname === '/search' && this.props.pathname !== '/search'){
            this.setState({
                searchQuery: ''
            });
        };
    }
    // componentDidUpdate(prevProps){
        //something like if prevProps.location !=== this.props.location
        //this.props.fetchProducts(this.props.location.search.slice(2) )
        // Note: .slice(2) is to remove the "q=" part of the query string.
        

        /** Issue: state wont reset once url isnt category or search **/
        // const { pathname } = this.props;
        // "cq" refers to '/c/:category & /search'
        // const searchPaths = "cq";

        // if("cq".includes(pathname[1]))
        // if(pathname[1] !== "c" || pathname[1] !== "q"){
        //     if(prevProps.pathname[1] === "c" || prevProps.pathname[1] === "q"){
        //         debugger
        //         if(this.state.searchQuery !== ""){
        //             this.setState({
        //                 searchQuery: ""
        //             });
        //         };
        //     };
        // };
    // }


    render(){
        
        return (
            <div className='nav-bar-search-bar-container'>
                <form className='nav-bar-search-form' onSubmit={this.handleSearch}>
                    <input className='nav-bar-search-bar' type="text" onChange={this.handleChange} value={this.state.searchQuery}/>

                    <div className="nav-bar-search-button-container">
                        <button className='nav-bar-search-button'>
                            <FaMagnifyingGlass className='nav-bar-search-icon'/>
                        </button>
                    </div>
                </form>
            </div>
        );
    }
};

export default SearchBar;