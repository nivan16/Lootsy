import React from 'react'

class ProductShow extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            quantity: 1
        };
        
        this.handleQuantityChange = this.handleQuantityChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleQuantityChange(e){
        e.stopPropagation();
        e.preventDefault();
        this.setState({
            quantity: e.target.value
        });
    }

    handleSubmit(e){
        e.stopPropagation();
        e.preventDefault();
    }

    componentDidMount(){
        //This returns the product, reviews, and owners/reviewers if product exists
        this.props.requestProduct(this.props.productId);
    }

    render() {
        if(!this.props.product) return null;

        //Array.from is an array constructor that can take an element arg 
        // such as just a { length } object, and actually map over it in
        // this function since it is still being constructed!
        // also doesnt create a middleman array!
        const options = () => Array.from({length: this.props.product.stock}, (_, i) => (
            <option value={i+1} key={i}>
                {i+1}
            </option>    
        ));

        return (
            <div className='product-show-container max-body-width body-padding'>
                <div className='product-image-and-info-container'>
                    <div className='product-image-container'>
                        <img className="index-product-image" src={"https://picsum.photos/900/"}>
                        </img>
                    </div>

                    <div className='product-info-container'>
                        <form onSubmit={this.handleSubmit}>
                            <div className='product-owner-username-container'>
                                <span>
                                    { this.props.users[this.props.product.ownerId].name }
                                </span>
                            </div>

                            <div className='product-name-container'>
                                <p>
                                    { this.props.product.name }
                                </p>
                            </div>

                            <div className='product-price-container'>
                                <span>
                                    { this.props.product.price }
                                </span>
                            </div>

                            <div className='product-quantity-container'>
                                {
                                    this.props.product.stock > 1 ? (
                                        <>
                                            <div className='product-quantity'>
                                                <span>Quantity</span>
                                            </div>
                                            <select className={"product-quantity-selector"}
                                                id="product-quantity-selector"
                                                onChange={this.handleQuantityChange}
                                                value={this.state.quantity}
                                            >
                                                {
                                                    options()
                                                }

                                            </select>
                                        </>
                                    ) : (
                                        null
                                    )
                                }
                            </div>
                            <div className='product-purchase-and-cart-buttons-container'>
                                <div className='product-checkout-button-container'>
                                    <button className='product-checkout-button'>
                                    </button>
                                    <p className='product-checkout-button-label'>
                                        Buy it now
                                    </p>
                                </div>

                                <div className='product-cart-add-button-container'>
                                    <button className='product-cart-add-button'>
                                    </button>
                                    <p className='product-cart-add-button-label'>
                                        Add to cart
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                
            </div>
        )
    }
};

export default ProductShow;

/*
    For component return value (if product), I need to:
        1) Create a space for a picture of the product (at the top)

        2) Create an area that offers the options to add the product
            to a cart or go to checkout that specific item (either to the right of the picture
            or below the reviews of the product depending on the width of the screen size)
                
            a) Needs a item owner (username), title, price, and quantity selector (relatively in that order)
        
            b) after the Add to cart/Purchase now buttons, needs the description inside of the aside/div
                as well as some flair (ex: purchase protection thats already been created elsewhere on the website)

        3) Create a section for the reviews
            a) shows the total amount of reviews(.length),
            
            b) the average rating of the reviews (displayed by the 5 star icons, maybe a seperate react library)
            
            c) the individual reviews, possibly sorted by high/low ratings,
                and displaying the individual score as well as the written review (if applicable)        
*/

/*
    Unique cases:
        
        1) When selecting a quantity that would exceed the stock from the Show Page,
            must render a conditional or something to convey to user that the quantity is over the stock limit,
            and set/retain the cart item quantity to equal the stock.
*/
