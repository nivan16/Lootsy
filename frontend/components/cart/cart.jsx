import React from 'react';
import CartItem from './cart_item';
import { Link } from 'react-router-dom';

class Cart extends React.Component{
    constructor(props){
        super(props);

        this.subTotal = this.subTotal.bind(this);
    }

    subTotal(cartProducts){
        let total = 0;
        
        cartProducts.forEach( cartProduct => total += (parseFloat(cartProduct.price) * cartProduct.quantity ) );
        return total;
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
        let price = this.subTotal(cartProducts);

        return (
            <>
                <div className='cart-header-wrapper max-body-width body-padding'>
                    
                    <div className='cart-product-amount-wrapper'>
                        <h1 className='cart-product-amount'>
                            {
                                productAmount === 1 ? ( 
                                    productAmount + ' items in your cart'
                                ) : (
                                    productAmount + ' items in your cart'
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
                    </ul>
                    
                    <div className='cart-checkout-wrapper'>
                        <div className='cart-checkout'>
                            {/* <form {onSubmit={handleCheckingOutOrSomething}}> */}
                            <form>
                                <div className='cart-checkout-price'>
                                    <span>Loot Total</span>

                                    <span>${price.toFixed(2)}</span>
                                </div>

                                <div className='cart-checkout-shipping'>
                                    <span>Shipping</span>

                                    <span>${(price*0.06).toFixed(2)}</span>
                                </div>

                                <div className='cart-checkout-tax'>
                                    <span>Tax</span>

                                    <span>${(price*0.071).toFixed(2)}</span>
                                </div>

                                <div className='cart-checkout-total'>
                                    <span>
                                        Total { productAmount === 1 ? (
                                            (`(${productAmount} items)`)
                                        ) : (
                                            "(1 item)"
                                        )}
                                    </span>
                                    
                                    <span>
                                        ${( price + (price*0.131) ).toFixed(2) }
                                    </span>
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