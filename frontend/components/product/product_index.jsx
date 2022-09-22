import React from "react";
import { Link } from 'react-router-dom';

class ProductIndex extends React.Component{
    constructor(props){
        super(props);
    };


    render(){
        debugger;
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
                        Object.values(this.props.products).map( (product, idx) => (                   
                            <li className='index-product' key={idx}>
                                <Link to={`/products/${product.id}`}>
                                    <div className="index-product-image-container">
                                        <img className="index-product-image" src={"https://picsum.photos/1" + (idx +100) + "/"}>
                                        </img>
                                    </div>
                                    <div className="index-product-info-container">
                                        <p className="index-product-name">
                                            {product.name}
                                        </p>
                                        <p className="index-product-price">
                                            ${product.price}
                                        </p>
                                        <p className="index-product-owner">
                                            {this.props.owners[product.ownerId].name}
                                        </p>
                                    </div>
                                </Link>
                            </li>                        
                        ))
                    }
                    {
                        Object.values(this.props.products).map( (product, idx) =>                        
                            <li className='index-product' key={idx}>
                                <Link to={`/products/${product.id}`}>
                                    <div className="index-product-image-container">
                                        <img className="index-product-image" src={"https://picsum.photos/90" + idx + "/"}>
                                        </img>
                                    </div>
                                    <div className="index-product-info-container">
                                        <p className="index-product-name">
                                            {product.name}
                                        </p>
                                        <p className="index-product-price">
                                            {product.price}
                                        </p>
                                        <p className="index-product-owner">
                                            {this.props.owners[product.ownerId].name}
                                        </p>
                                    </div>
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