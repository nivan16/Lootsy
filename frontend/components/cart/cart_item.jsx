import React from 'react';

class CartItem extends React.Component{
    constructor(props){
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
        this.changeQuantity = this.changeQuantity.bind(this);
    }

    handleRemove(e){
        e.preventDefault();
        this.props.deleteCartItem(
            this.props.currentUser.id,
            this.props.cartProduct.id
        );
    }

    changeQuantity(e){
        e.preventDefault();
    }

    render(){
        const quantities = new Array(15);
        return(
            <>
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
                            <button onClick={this.handleRemove}>
                                Remove from cart
                            </button>
                        </div>

                    </div>
                </div>

                <div className='cart-item-numbers-wrapper'>
                    <div className='cart-item-quantity-wrapper'>
                        <select name="cart-item-quantity" id="cart-item-quantity" onChange={this.changeQuantity}>
                            {
                                quantities.map((_, i) => {
                                    
                                })
                            }
                        </select>
                    </div>
                </div>          
            </>
        )
    }
};

export default CartItem;