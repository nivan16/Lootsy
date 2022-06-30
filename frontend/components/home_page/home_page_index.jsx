import React from 'react';
import HomePageItem from './home_page_item';

class HomePageIndex extends React.Component{
    constructor(props){
        super(props);
    }
    
    componentDidMount(){
        //will only query backend if there are no products in the State
        if(this.props.products[0] === undefined) {
            this.props.requestProducts();
        }
    }

    render(){
        if (!(this.props.products)){
            return null;
        }
        return (
            <div>
                {
                    this.props.products.map( (product, idx) => (
                        <HomePageItem key={product.id} product={product} idx={idx}/>
                    ))
                }
            </div>
        )
    }
};

export default HomePageIndex;