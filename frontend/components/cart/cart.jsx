import React from 'react';
import CartItem from './cart_item';
import { Link } from 'react-router-dom';

class Cart extends React.Component{
    constructor(props){
        super(props);

        this.priceTotal = this.priceTotal.bind(this);
    }

    priceTotal(){

    }


    render(){
        if($.isEmptyObject(this.props.cart)){
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
        };

        const cartProducts = Object.values(this.props.cart.products);
        const productAmount = cartProducts.length;

        return (
            <>
                <div className='cart-header-wrapper max-body-width body-padding'>
                    <div className='cart-product-amount-wrapper'>
                        <h1 className='cart-product-amount'>
                            {
                                productAmount === 1 ? ( 
                                    productAmount + 'items in your cart'
                                ) : (
                                    productAmount + 'items in your cart'
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

                <div className='cart-index-and-checkout-wrapper max-body-width body-padding'>
                    <div className='cart-index'>
                            {
                                cartProducts.map( cartProduct => (
                                    <CartItem
                                        key={cartProduct.id}
                                        cartProduct={cartProduct}
                                        productOwner={this.props.cart.owners[cartProduct.ownerId]}
                                        currentUser={this.props.currentUser}
                                        updateCartItem={this.props.updateCartItem}
                                        deleteCartItem={this.props.deleteCartItem}
                                    />
                                ))
                            }

                            <div className='cart-index-checkout'>
                                {/* <form {onSubmit={handleCheckingOutOrSomething}}> */}
                                <form>
                                    

                                </form>
                            </div>                        
                        
                    </div>

                </div>
            </>
        );
    }
}

export default Cart;