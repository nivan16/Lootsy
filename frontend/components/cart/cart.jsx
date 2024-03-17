import React from 'react';
import CartItem from './cart_item';
import { Link } from 'react-router-dom';

import { FaXmark } from "react-icons/fa6";

class Cart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            checkoutModal: false
        }

        this.subTotal = this.subTotal.bind(this);
        this.handleCheckout = this.handleCheckout.bind(this);
        this.openCheckoutModal = this.openCheckoutModal.bind(this);
        this.closeCheckoutModal = this.closeCheckoutModal.bind(this);
    }

    subTotal(cartItems){
        let total = 0;
        
        //consider future usage of reduce instead of forEach
        cartItems.forEach( cartItem => total += (parseFloat(cartItem.price) * cartItem.quantity ) );
        return total;
    }

    openCheckoutModal(e){
        e.preventDefault();

        this.setState({
            checkoutModal: true
        });
    }

    closeCheckoutModal(e){
        e.preventDefault();

        if(['cart-checkout-modal-background', 'checkout-modal-outside-close-button','checkout-modal-purchase-shopping-return-button'].includes(e.target.className)){
            this.setState({
                checkoutModal: false
            });
        };
    }

    handleCheckout(e){
        e.preventDefault();
        
        //Maybe create a modal that thanks for browsing
        // for a 1.5 second duration, then redirects to homepage?
        //Or a separate page that gives thanks while also being a
        // pretty pseudo application page?
        this.props.deleteCart(this.props.currentUser.id)
            .then( () => this.props.history.push('/cart'));
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
                <>
                    <div className='cart-guarantee-wrapper max-body-width body-padding'>
                        <div className='cart-guarantee empty-cart-guarantee'>
                            <p>
                                <strong>Cutesy Protection Program: </strong>
                                We work with many established cuties to guarantee your order.
                                If something happens, we've got your back!
                            </p>
                        </div>
                    </div>
                    <div className='cart-empty max-body-width body-padding'>
                        <h2 className='cart-empty-title'>
                            Your cart is empty.
                        </h2>
                        
                        <Link to='/'>
                            <span className='cart-empty-suggestion'>
                                Find some adorable items from our store to fill it up!
                            </span>
                        </Link>
                    </div>
                </>
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
                                    cartItemAmount + ' item in your cart'
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
                                    keep shopping
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='cart-guarantee-wrapper max-body-width body-padding'>
                    <div className='cart-guarantee'>
                        <p>
                            <strong>Cutesy Protection Program: </strong>
                            We work with many established cuties to guarantee your order.
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
                            <div className='cart-checkout-subtotal-container'>

                                <span className='cart-checkout-subtotal'>
                                    cart subtotal:
                                </span>

                                <span className='cart-checkout-subtotal-price'>
                                    ${price.toFixed(2)}
                                </span>

                            </div>

                            <div className='cart-checkout-shipping-container'>

                                <span className='cart-checkout-shipping'>
                                    shipping:
                                </span>

                                <span className='cart-checkout-shipping-price'>
                                    ${(price*0.06).toFixed(2)}
                                </span>

                            </div>

                            <div className='cart-checkout-tax-container'>
                            
                                <span className='cart-checkout-tax'>
                                    tax:
                                </span>

                                <span className='cart-checkout-tax-price'>
                                    ${(price*0.071).toFixed(2)}
                                </span>
                            
                            </div>

                            <div className='cart-checkout-total-container'>
                                <span className='cart-checkout-total'>
                                    total { cartItemAmount === 1 ? (
                                        "(1 item)"
                                    ) : (
                                        `(${cartItemAmount} items)`
                                    )}:
                                </span>
                                
                                <span className='cart-checkout-total-price'>
                                    ${( price + (price*0.131) ).toFixed(2) }
                                </span>
                            </div>
                            <div className='cart-checkout-button-container'>
                                <button className='cart-checkout-button' onClick={this.openCheckoutModal}>
                                </button>
                                <p className='cart-checkout-button-label'>
                                    checkout
                                </p>
                            </div>                            
                        </div>                        

                    </div>

                </div>

                <div className={`cart-checkout-modal-wrapper ${this.state.checkoutModal ? 'open' :'closed'}`}>
                    <div className='cart-checkout-modal-background' onMouseDown={this.closeCheckoutModal}>
                        <div className='checkout-modal-container'>
                            <span className='checkout-modal-outside-close-button'>
                                <FaXmark className='fa-checkout-modal-close-button' />
                            </span>

                            <h2 className='checkout-modal-title'>
                                Confirm your purchase!
                            </h2>

                            <div className='checkout-modal-price-total-container'>
                                <div className='checkout-modal-price-total'>
                                    Your total is ${( price + (price*0.131) ).toFixed(2) }.
                                </div>
                            </div>

                            <div className='checkout-modal-message-container'>
                                <p className='checkout-modal-message'>
                                    Thank you for shopping with us! If you are ready to
                                    proceed with your purchase, go ahead and confirm below.
                                    Otherwise, feel free to keep browsing our wonderfully
                                    adorable products!
                                </p>
                            </div>

                            <div className='checkout-modal-buttons-container'>
                                <button className='checkout-modal-purchase-confirmation-button' onClick={this.handleCheckout}>
                                    purchase items
                                </button>

                                <button className='checkout-modal-purchase-shopping-return-button' >
                                    keep shopping
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                    
            </>
        );
    }
}

export default Cart;