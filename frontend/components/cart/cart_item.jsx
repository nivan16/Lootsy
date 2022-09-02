import React from 'react';
import Select from 'react-select';

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
        let options = () => Array.from({length: this.props.cartProduct.stock}, (_, i) => { 
            debugger
            return <option value={i+1} key={i}>
                {i+1}
            </option>    
        });

        return (
            <div className='cart-item-wrapper'>
                <form onSubmit={this.handleRemove}>
                    <div className='cart-item-owner-wrapper'>
                        <span className='cart-item-owner'>
                            {this.props.productOwner.name}
                        </span>
                    </div>

                    <div className='cart-item-info-wrapper'>
                        <div className='cart-item-image'>

                        </div>
                        <div className='cart-item-info'>
                            <div className='cart-item-name'>
                                <span>
                                    {this.props.cartProduct.name}
                                </span>
                            </div>
                            <div>
                                <button className="cart-item-remove-button">
                                    Remove from cart
                                </button>
                            </div>

                        </div>
                    </div>

                    <div className='cart-item-numbers-wrapper'>
                        <div className='cart-item-quantity-wrapper'>
                            {
                                this.props.cartProduct.stock === 1 ? (
                                    <span className='cart-item-one-left'>
                                        There's only one item left of this loot!
                                    </span>
                                ) : (
                                    <select className="cart-item-quantity-selector"
                                        id="cart-item-quantity-selector"
                                        onChange={this.handleQuantityChange}
                                        value={this.props.cartProduct.quantity}
                                        >
                                        options={options()}
                                    </select>
                                )
                            }
                        </div>
                        <div className='cart-item-price-wrapper'>
                            <span className='cart-item-price'>
                                { "$"+this.props.cartProduct.price  }
                            </span>
                        </div>

                    </div>          
                </form>
            </div>
        )
    }
};



export default CartItem;
