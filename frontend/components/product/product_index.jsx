import React from "react";
import { Link } from 'react-router-dom';

class ProductIndex extends React.Component{
    constructor(props){
        super(props)
    };


    render(){

        return (
            <div className='product-index-container max-body-width'>
                <div className="product-index-header body-padding">
                    <h2>Find something you'll love</h2>
                </div>
                <ul className="product-index">
                    {
                        this.props.products.map( (product, idx) =>                        
                            <li className='product-index-product' key={idx}>
                                <Link to={`/products/${product.id}`}>
                                    <div className="product-index-image-container">
                                        <div className="product-index-image">

                                        </div>
                                    </div>
                                    {product.name}
                                </Link>
                            </li>                        
                        )
                    }
                </ul>
            </div>
        );
    }

}

export default ProductIndex;