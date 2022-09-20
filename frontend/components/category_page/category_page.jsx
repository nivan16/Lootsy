import React from 'react';

import ProductIndex from '../product/product_index';

class CategoryPage extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.requestProducts(this.props.category.replaceAll('-',' '));
    }

    componentDidUpdate(prevProps){
        if( prevProps.match.params.category !== this.props.category){
            this.props.requestProducts(this.props.category.replaceAll('-',' '));
        }
    }

    render(){
        // console.log("I've rendered!")
        // debugger;
        //Figure out why the product isnt rendering even though it exists in the state

        return (
            <ProductIndex products={this.props.products} />
        );
    }
};

export default CategoryPage;