import React from 'react';
import CartItem from './cart_item';
import { Link } from 'react-router-dom';

class Cart extends React.Component{
    constructor(props){
        super(props);

        this.subTotal = this.subTotal.bind(this);
        this.handleCheckout = this.handleCheckout.bind(this);
    }

    subTotal(cartItems){
        let total = 0;
        
        //consider future usage of reduce instead of forEach
        cartItems.forEach( cartItem => total += (parseFloat(cartItem.price) * cartItem.quantity ) );
        return total;
    }

    handleCheckout(e){
        e.preventDefault();
        
        //Maybe create a modal that thanks for browsing
        // for a 1.5 second duration, then redirects to homepage?
        //Or a separate page that gives thanks while also being a
        // pretty pseudo application page?
        this.props.deleteCart(this.props.currentUser.id)
            .then( () => this.props.history.push('/'));
    }


    render(){

        //if the cart doesnt have the necessary products in the
        // Redux state
        if(this.props.cart === false){
            this.props.requestCart(this.props.currentUser.id);
            return null;
        };

        //if the cart is just empty
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
        


        const cartItems = Object.values(this.props.cart);
        const cartItemAmount = cartItems.length;
        let price = this.subTotal(cartItems);

        return (
            <>
                <div className='cart-header-wrapper max-body-width body-padding'>
                    
                    <div className='cart-product-amount-wrapper'>
                        <h1 className='cart-product-amount'>
                            {
                                cartItemAmount === 1 ? ( 
                                    cartItemAmount + ' items in your cart'
                                ) : (
                                    cartItemAmount + ' items in your cart'
                                )
                            }
                        </h1>
                    </div>

                    <div className='cart-index-redirect-button-wrapper'>
                        <div className='cart-index-redirect-button'>
                            <Link to='/'>
                                <span className='cart-index-redirect-button-text'>
                                    Keep Shopping
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='cart-guarantee-wrapper max-body-width body-padding'>
                    <div className='cart-guarantee'>
                        <p>
                            <strong>Lootsy Purchase Protection: </strong>
                            We work with many established guilds to guarantee your order.
                            If something happens, we've got your back!
                        </p>
                    </div>
                </div>

                <div className='cart-index-and-checkout-wrapper max-body-width body-padding'>
                    <ul className='cart-index'>
                        {
                            cartItems.map( cartItem => (
                                <CartItem
                                    key={cartItem.id}
                                    cartItem={cartItem}
                                    currentUser={this.props.currentUser}
                                    updateCartItem={this.props.updateCartItem}
                                    deleteCartItem={this.props.deleteCartItem}
                                />
                            ))
                        }
                    </ul>
                    
                    <div className='cart-checkout-wrapper'>
                        <div className='cart-checkout'>
                            {/* <form {onSubmit={handleCheckingOutOrSomething}}> */}
                            <form onSubmit={this.handleCheckout}>
                                <div className='cart-checkout-subtotal-container'>

                                    <span className='cart-checkout-subtotal'>
                                        Cart subtotal
                                    </span>

                                    <span className='cart-checkout-subtotal-price'>
                                        ${price.toFixed(2)}
                                    </span>

                                </div>

                                <div className='cart-checkout-shipping-container'>

                                    <span className='cart-checkout-shipping'>
                                        Shipping
                                    </span>

                                    <span className='cart-checkout-shipping-price'>
                                        ${(price*0.06).toFixed(2)}
                                    </span>

                                </div>

                                <div className='cart-checkout-tax-container'>
                                
                                    <span className='cart-checkout-tax'>
                                        Tax
                                    </span>

                                    <span className='cart-checkout-tax-price'>
                                        ${(price*0.071).toFixed(2)}
                                    </span>
                                
                                </div>

                                <div className='cart-checkout-total-container'>
                                    <span className='cart-checkout-total'>
                                        Total { cartItemAmount === 1 ? (
                                            "(1 item)"
                                        ) : (
                                            `(${cartItemAmount} items)`
                                        )}
                                    </span>
                                    
                                    <span className='cart-checkout-total-price'>
                                        ${( price + (price*0.131) ).toFixed(2) }
                                    </span>
                                </div>
                                <div className='cart-checkout-button-container'>
                                    <button className='cart-checkout-button'>
                                    </button>
                                    <p className='cart-checkout-button-label'>
                                        Checkout
                                    </p>
                                </div>
                            </form>
                        </div>                        

                    </div>

                </div>
            </>
        );
    }
}

export default Cart;