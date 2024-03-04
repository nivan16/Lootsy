import React from 'react';
import { Link } from 'react-router-dom';

class CartItem extends React.Component{
    constructor(props){
        super(props);

        this.handleRemove = this.handleRemove.bind(this);
        this.handleQuantityChange = this.handleQuantityChange.bind(this);
    }

    handleRemove(e){
        e.preventDefault();
        //Must change the productId to cartItemId
        //  at here, the action, and the cart items controller since
        //  it is now available (unsure why I had done so before
        //  if it was previously available)
        this.props.deleteCartItem(
            this.props.currentUser.id,
            this.props.cartItem.productId
        );
    }

    handleQuantityChange(e){
        e.stopPropagation();
        e.preventDefault();
        this.props.updateCartItem({
            shopperId: this.props.currentUser.id,
            productId: this.props.cartItem.productId,
            quantity: e.target.value
        });
    }

    render(){
        //Array.from is an array constructor that can take an element arg 
        // such as just a { length } object, and actually map over it in
        // this function since it is still being constructed!
        // also doesnt create a middleman array!
        const options = () => Array.from({length: this.props.cartItem.stock}, (_, i) => (
            <option value={i+1} key={i}>
                {i+1}
            </option>    
        ));

        return (
            <li className='cart-list-item'>                
                <form onSubmit={this.handleRemove}>
                    <p className='cart-item-owner'>
                        {this.props.cartItem.ownerName}
                    </p>
                    
                    <div className='cart-item-wrapper'>
                        <div className='cart-item-image'>
                            <img className="index-product-image" src={this.props.cartItem.image === '' ? `https://picsum.photos/90${Math.floor(Math.random()*9)}` : this.props.cartItem.image}>
                            </img>
                        </div>

                        <div className='cart-item-info-wrapper'>
                            <div className='cart-item-info'>
                                <p className='cart-item-name'>
                                    <Link to={`/products/${this.props.cartItem.productId}`}>
                                        {this.props.cartItem.productName}
                                    </Link>
                                </p>
                                <div>
                                    <button className="cart-item-remove-button">
                                        Remove item
                                    </button>
                                </div>

                            </div>
                        </div>

                        <div className='cart-item-quantity-wrapper'>
                            <div className='cart-item-numbers-wrapper'>
                                <div className='cart-item-quantity-selector-container'>
                                    {
                                        this.props.cartItem.stock > 1 ? (
                                            <select className={"cart-item-quantity-selector"}
                                                id="cart-item-quantity-selector"
                                                onChange={this.handleQuantityChange}
                                                value={this.props.cartItem.quantity}
                                                >
                                                {options()}
                                            </select>
                                        ) : (
                                            null
                                        )
                                    }

                                </div>
                                <div className='cart-item-price-wrapper'>
                                    <span className='cart-item-price'>
                                        { "$"+this.props.cartItem.price  }
                                    </span>
                                </div>
                            </div>
                            {
                                this.props.cartItem.stock === 1 ? (
                                    <p className='cart-item-one-left'>
                                        There's only one item left of this item!
                                    </p>
                                ) : (
                                    null
                                )
                            }

                        </div>          
                    </div>
                </form>
            </li>
        )
    }
};



export default CartItem;
