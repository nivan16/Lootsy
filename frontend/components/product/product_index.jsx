import React from "react";
import { Link } from 'react-router-dom';

class ProductIndex extends React.Component{
    constructor(props){
        super(props)
    };


    render(){

        return (
            <div className='product-index-container max-body-width body-padding'>
                <div className="product-index-header">
                    <h2>Find something you'll love</h2>
                </div>
                <div className="product-index">
                    {
                        this.props.products.map( (product, idx) =>                        
                            <div className='category-page-product' key={idx}>
                                <Link to={`/products/${product.id}`}>
                                    {product.name}
                                </Link>
                            </div>                        
                        )
                    }
                </div>
            </div>
        );
    }

}

export default ProductIndex;