import React from 'react';
import { Link } from 'react-router-dom';

class Cart extends React.Component{

    render(){
        if(this.props.cart === {}){
            return (
                <div className='cart-empty'>
                    <h2>Your cart is empty.</h2>
                    <Link to='/'>
                        <span>
                            Find some loot from our store to fill it up
                        </span>
                    </Link>
                </div>
            )
        }

        const cartProducts = Object.values(this.props.cart.products);
        const productAmount = cartProducts.length;

        return (
            <>
                <div className='cart-header-wrapper max-body-width body-padding'>
                    <div className='cart-product-amount-wrapper'>
                        <h1 className='cart-product-amount'>
                            {
                                productAmount === 1 ? ( 
                                    `${productAmount} item in your cart`
                                ) : (
                                    `${productAmount} items in your cart`
                                )
                            }
                        </h1>
                    </div>

                    <div className='cart-index-redirect-wrapper'>
                        <Link to='/'>
                            <span className='cart-index-redirect'>
                                Keep Shopping
                            </span>
                        </Link>
                    </div>
                </div>

                <div className='cart-index-wrapper max-body-width body-padding'>
                    <div className='cart-index'>


                    </div>
                </div>
            </>
        )
    }
}

export default Cart;