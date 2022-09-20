import React from "react";
import { Link } from 'react-router-dom';

class ProductIndex extends React.Component{
    constructor(props){
        super(props)
    };


    render(){

        if($.isEmptyObject(this.props.products)){
            return (
                <div className="product-index-no-products">
                    Sorry, no products were found!
                </div>
            );
        };

        return (
            <div className='product-index-container max-body-width'>
                <div className="product-index-header">
                    <h2>Find something you'll love</h2>
                </div>
                <ul className="product-index">
                    {
                        Object.values(this.props.products).map( (product, idx) =>                        
                            <li className='product-index-product' key={idx}>
                                <Link to={`/products/${product.id}`}>
                                    <div className="product-index-image-container">
                                        <img className="product-index-image" src="https://randompicturegenerator.com/img/flower-generator/g0f1ca250391007b3ad1213bc5c8d1ff366a442c1e7038df928e89438ba91a75396122321a9a84f2eeae3c3922effe26e_640.jpg">

                                        </img>
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