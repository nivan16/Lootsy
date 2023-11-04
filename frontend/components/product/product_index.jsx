import React from "react";
import StarRatings from 'react-star-ratings';

import { Link } from 'react-router-dom';

class ProductIndex extends React.Component{
    constructor(props){
        super(props);
    };


    render(){
        if($.isEmptyObject(this.props.products)){
            return (
                <div className="product-index-no-products-container">
                    <div className="max-body-width body-padding">
                        <p className="no-products-found-message">
                            We couldn't find any results for
                        </p>
                        <p className="no-products-found-query">
                            {this.props.query}
                        </p>
                        <h1 className="no-products-found-suggestion">
                            Try searching for something else instead?
                        </h1>
                    </div>
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
                            <li className='index-product' key={idx}>
                                <Link to={`/products/${product.id}`}>
                                    <div className="index-product-image-container">
                                        <img className="index-product-image" src={`https://picsum.photos/90${idx}`}>
                                        </img>
                                    </div>
                                    <div className="index-product-info-container">
                                        <p className="index-product-name">
                                            {product.name}
                                        </p>

                                        <div className="index-product-average-rating">
                                            <StarRatings 
                                                rating={product.avgRating}
                                                starEmptyColor='lightgray'
                                                className='aggregate-review-rating'
                                                starDimension='20px'
                                                starSpacing='1px'
                                            />
                                        </div>

                                        <p className="index-product-price">
                                            {product.price}
                                        </p>

                                        <p className="index-product-owner">
                                            {this.props.users[product.ownerId].name}
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