import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faFaceFrown } from '@fortawesome/free-solid-svg-icons';

class ProductShow extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showPurchasedModal: false,
            showAddedToCartModal: false,
            showDescription: false,
            quantity: 1
        };
        
        this.handleQuantityChange = this.handleQuantityChange.bind(this);
        this.handlePurchase = this.handlePurchase.bind(this);
        this.handleAddToCart = this.handleAddToCart.bind(this);
        this.toggleDescription = this.toggleDescription.bind(this);
        this.closeAddedToCartModal = this.closeAddedToCartModal.bind(this);
    }

    closeAddedToCartModal(e){
        e.stopPropagation();
        e.preventDefault();

        if(e.target.className === 'product-cart-added-modal-background'){
            this.setState({
                showAddedToCartModal: false
            });
        }
    }

    handleQuantityChange(e){
        e.stopPropagation();
        e.preventDefault();

        this.setState({
            quantity: e.target.value
        });
    }

    handlePurchase(e){
        e.stopPropagation();
        e.preventDefault();
        this.props.history.push('/')
    }

    handleAddToCart(e){
        e.stopPropagation();
        e.preventDefault();
    
        if(this.props.currentUser === null){

        }
        else {
            this.props.updateCartItem({
                productId: this.props.productId,
                shopperId: this.props.currentUser.id,
                quantity: this.state.quantity
            })
            .then( data => this.setState({
                showAddedToCartModal: true
            }))

        }
    }

    toggleDescription(e){
        e.stopPropagation();
        e.preventDefault();

        this.setState( prevProps => ({
            showDescription: !prevProps.showDescription
        }));
    }



    componentDidMount(){
        //This returns the product, reviews, and owners/reviewers if product exists
        this.props.requestProduct(this.props.productId);
    }

    render() {
        if(!this.props.product) return (
            <div className='max-body-width body-padding'>
                <div className="product-show-unavailable-container">
                    <FontAwesomeIcon icon={faFaceFrown} style={{color: "#878787",}} />
                    <p className='product-show-unavailable'>
                        Sorry, this item is unavailable.
                    </p>
                </div>
            </div>
        );

        //Array.from is an array constructor that can take an element arg 
        // such as just a { length } object, and actually map over it in
        // this function since it is still being constructed!
        // also doesnt create a middleman array!
        const options = () => Array.from({length: this.props.product.stock}, (_, i) => (
            <option value={i+1} key={i}>
                {i+1}
            </option>    
        ));
        https://i.pinimg.com/originals/33/9e/1b/339e1b7693b8132ed5393d34eaddb52b.jpg
        return (
            <div className='product-show-container max-body-width body-padding'>
                <div className='product-image-and-info-container'>
                    <div className='product-image-container'>
                        {/* <img className="product-show-image" src={"https://picsum.photos/900/"}>
                        </img> */}
                        <div className='product-image-width-height-wrapper'>

                            {
                            /* 

                            *longer height*
                            <img src={"https://i.pinimg.com/originals/33/9e/1b/339e1b7693b8132ed5393d34eaddb52b.jpg"}>
                            </img>

                            *longer width*
                            <img className="product-show-image" src={"https://fastly.picsum.photos/id/757/1600/900.jpg?hmac=xB17QkxH_kqjV6K0R7-EZkW2xTq8iukba_wZ6wo5d4Q"}>
                            </img>

                            With this image type (longer height than width), should I have it
                                with w & h at 100% with "object-fit: cover;" and create an 
                                onClick function that creates an overlay of opacity 80% grey
                                and shows the whole image, or should i just do "object-fit: fill;"
                                with position relative(having the image in the middle translated)
                                and max-height: 100% ??? */
                            }
                            
                            <img className="product-show-image" src={"https://fastly.picsum.photos/id/757/1600/900.jpg?hmac=xB17QkxH_kqjV6K0R7-EZkW2xTq8iukba_wZ6wo5d4Q"}>
                            </img>
                        </div>

                    </div>

                    <div className='product-info-container'>
                        <div className='product-price-container'>
                            <span>
                                ${ this.props.product.price }
                            </span>
                        </div>

                        <div className='product-name-container'>
                            <h1>
                                { this.props.product.name }
                            </h1>
                        </div>

                        <div className='product-owner-username-container'>
                            <span>
                                { this.props.users[this.props.product.ownerId].name }
                            </span>
                        </div>                        

                        <div className='product-quantity-container'>
                            {
                                this.props.product.stock > 1 ? (
                                    <>
                                        <div className='product-quantity'>
                                            <span>Quantity</span>
                                        </div>
                                        <select className='product-quantity-selector'
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
                                <form onSubmit={this.handlePurchase}>
                                    <button className='product-checkout-button'>
                                        Buy it now
                                    </button>
                                    {/* <p className='product-checkout-button-label'>
                                        Buy it now
                                    </p> */}
                                </form>
                            </div>

                            <div className='product-cart-add-button-container'>
                                <form onSubmit={this.handleAddToCart}>
                                    <button className='product-cart-add-button'>
                                        Add to cart
                                    </button>
                                </form>
                                {/* <p className='product-cart-add-button-label'>
                                    Add to cart
                                </p> */}                                    
                            </div>

                        </div>

                        <div
                            className='product-description-container' 
                            onClick={this.toggleDescription}
                        >
                            <h2 className='product-description-header'>
                                <button className='product-description-header-button'>
                                    Description
                                </button>

                                <FontAwesomeIcon icon={faCaretDown} className={`fa-caret-down ${this.state.showDescription ? "" : "expanded"}`}/>
                            </h2>
                        </div>

                        {/* 
                            Type of React conditional rendering:
                            this.state.showDescription && (
                                <div className="product-show-description">
                                    Conditional rendering on
                                </div>
                            )

                            I would use it, but its important a screenreader can still access
                            the text through display none
                        */}

                        <div className={`product-description ${this.state.showDescription ? " expanded" : ""}`}>
                            {this.props.product.description}
                        </div>
                    </div>
                </div>

                {/* 
                <img className="product-modal-image" src={"https://fastly.picsum.photos/id/757/1600/900.jpg?hmac=xB17QkxH_kqjV6K0R7-EZkW2xTq8iukba_wZ6wo5d4Q"}>
                </img>

                *********vvvv height vvvv**************
                <img className="product-modal-image" src={"https://i.pinimg.com/originals/33/9e/1b/339e1b7693b8132ed5393d34eaddb52b.jpg"}>
                </img> 
                */}
                {/* <div className={`product-cart-added-modal-wrapper ${this.state.showAddedToCartModal ? 'open' : 'closed'}`}> */}
                <div className='product-cart-added-modal-wrapper open'>
                    <div 
                        className='product-cart-added-modal-background'
                        onClick={this.closeAddedToCartModal}
                    >
                        <div className='product-cart-added-modal-container'>
                            <div className='product-cart-added-modal-image-and-description-container'>
                                <div className='product-modal-image-container'>
                                    <img className="product-modal-image" src={"https://fastly.picsum.photos/id/757/1600/900.jpg?hmac=xB17QkxH_kqjV6K0R7-EZkW2xTq8iukba_wZ6wo5d4Q"}>
                                    </img>
                                </div>
                                <p className='product-cart-added-modal-description'>
                                    1 item added to cart
                                </p>
                            </div>
                            <div>
                                <form>
                                    Remember to update the form above to include and
                                        onSubmit, preventDefault & stopPropagation in the function,
                                        and also add the className of the button below to the close
                                        modal function
                                    <button>
                                        View your cart
                                    </button>
                                </form>
                            </div>
                            <div>
                                <button className='product-cart-added-modal-close-button'>
                                    Keep shopping
                                </button>
                            </div>
                        </div>
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
        
            b) after the Add to cart/Purchase now buttons, needs the *Product Description* inside of the aside/div
                as well as some flair (ex: purchase protection thats already been created elsewhere on the website)

        3) Create a section for the reviews
    
            a) Not a step per se, but the Reviews Component will **Need** to be either:

                1) After consideration, it would be more efficient for the Product Details to be created twice in the render.

                    a) On a computer view, it will likely either *float right*, or it will be in a *flex box that contains the Product Image*

                    b) On a phone view, the whole page will simply be *flex-direction: column;*

                *) In its own container, and have the Primary Container as a CSS Grid Layout for the Image, Details, and Reviews
                *) In the overall container as the Product Image so that the Reviews can be listed under it


            b) shows the total amount of reviews(.length),
            
            c) the average rating of the reviews (displayed by the 5 star icons, maybe a seperate react library)
            
            d) the individual reviews, possibly sorted by high/low ratings,
                and displaying the individual score as well as the written review (if applicable)
        
        
                
*/

/*
    Unique cases:
        
        1) When selecting a quantity that would exceed the stock from the Show Page,
            must render a conditional or something to convey to user that the quantity is over the stock limit,
            and set/retain the cart item quantity to equal the stock.
*/
