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
        this.props.deleteCartItem(
            this.props.currentUser.id,
            this.props.cartProduct.id
        );
    }

    handleQuantityChange(e){
        e.stopPropagation();
        e.preventDefault();
        this.props.updateCartItem({
            shopperId: this.props.currentUser.id,
            productId: this.props.cartProduct.id,
            quantity: e.target.value
        });
    }

    render(){
        //Array.from is an array constructor that can take an element arg 
        // such as just a { length } object, and actually map over it in
        // this function since it is still being constructed!
        // also doesnt create a middleman array!
        const options = () => Array.from({length: this.props.cartProduct.stock}, (_, i) => (
            <option value={i+1} key={i}>
                {i+1}
            </option>    
        ));

        return (
            <li className='cart-list-item'>                
                <form onSubmit={this.handleRemove}>
                    <p className='cart-item-owner'>
                        {this.props.productOwner.name}
                    </p>
                    
                    <div className='cart-item-wrapper'>
                        <div className='cart-item-image'>

                        </div>

                        <div className='cart-item-info-wrapper'>
                            <div className='cart-item-info'>
                                <p className='cart-item-name'>
                                    <Link to={`/products/${this.props.cartProduct.id}`}>
                                        {this.props.cartProduct.name}
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
                                        this.props.cartProduct.stock > 1 ? (
                                            <select className={"cart-item-quantity-selector"}
                                                id="cart-item-quantity-selector"
                                                onChange={this.handleQuantityChange}
                                                value={this.props.cartProduct.quantity}
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
                                        { "$"+this.props.cartProduct.price  }
                                    </span>
                                </div>
                            </div>
                            {
                                this.props.cartProduct.stock === 1 ? (
                                    <p className='cart-item-one-left'>
                                        There's only one item left of this loot!
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
