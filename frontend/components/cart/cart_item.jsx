import React from 'react';

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
        const options = () => Array.from({length: 15}, (undefined, i) => ( 
            <option value={i+1} key={i}>
                {i+1}
            </option>    
        ));
        
        return(
            <>
                {/* <form> */}
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
                            
                            <select name="cart-item-quantity-selector" id="cart-item-quantity-selector"
                                onChange={this.handleQuantityChange}
                                defaultValue={this.props.cartProduct.quanitity}
                            >
                                {options()}
                            </select>
                        </div>
                    </div>          
                {/* </form> */}
            </>
        )
    }
};

export default CartItem;

{/* <select name="cart-item-quantity" id="cart-item-quantity" onChange={this.changeQuantity}>
                            {
                                quantities.map((_, i) => {
                                    
                                })
                            }
                        </select> */}