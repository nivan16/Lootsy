import React from 'react';
import { Link } from 'react-router-dom';

class CategoryPage extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.requestProducts(this.props.category.replaceAll('-',' '));
    }



    render(){
        //Figure out why the product isnt rendering even though it exists in the state
        if(!this.props.products[0]) return null;
        return (
            <div className='category-page-wrapper'>
                {
                    this.props.products.map( (product, idx) =>                        
                        <div className='category-page-product'>
                            {product.name}
                        </div>                        
                    )
                }
            </div>
        );
    }

}
export default CategoryPage;