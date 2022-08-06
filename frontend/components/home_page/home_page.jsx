import React from 'react';
import HomePageItem from './home_page_item';
import { Link } from 'react-router-dom';

class HomePage extends React.Component{
    constructor(props){
        super(props);
    }
    
    componentDidMount(){
        this.props.requestProducts();
    }

    render(){
        if (!(this.props.products)){
            return null;
        }
        return (
            <>

                <div className='home-page-category-wrapper'>
                    <div className='home-page-title-wrapper max-body-width body-padding'>
                        <h1 className='home-page-title'>Loot that is meant for you.</h1>
                    </div>

                    <div className='home-page-categories max-body-width body-padding'>
                    
                    </div>

                </div>

                <div className='home-page-grid-wrapper max-body-width body-padding'>
                    <div className='home-page-grid'>
                        {
                            this.props.products.map( (product, idx) => (
                                <HomePageItem key={product.id} product={product} idx={idx}/>
                            ))
                        }
                    </div>
                </div>
            </>
        )
    }
};

export default HomePage;