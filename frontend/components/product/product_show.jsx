import React from 'react';
import ReviewIndexContainer from '../review/review_index';

import { FaCaretDown } from "react-icons/fa";
import { FaArrowRightLong, FaFaceFrown, FaXmark, FaAngellist, FaGithub, FaLinkedin } from "react-icons/fa6";

import ReviewFormContainer from '../review/review_form';

class ProductShow extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showAddedToCartModal: false,
            showDescription: true,
            showPurchasedModal: false,
            showReviewModal: false,
            quantity: 1
        };
        
        this.handleAddToCart = this.handleAddToCart.bind(this);
        this.handlePurchase = this.handlePurchase.bind(this);
        this.handleQuantityChange = this.handleQuantityChange.bind(this);
        this.redirectToCart = this.redirectToCart.bind(this);
        this.toggleDescription = this.toggleDescription.bind(this);
        
        this.openReviewModal = this.openReviewModal.bind(this);
        this.closeAddedToCartModal = this.closeAddedToCartModal.bind(this);
        this.closePurchasedModal = this.closePurchasedModal.bind(this);
        this.closeReviewModal = this.closeReviewModal.bind(this);
    }

    componentDidUpdate(prevProps){

        //Note: This is to automatically open the review modal if a user
        //          attempted to leave a review but was not logged in
        
        //if the session modal was opened
        //Nevermind. Its the second condition for some reason!!!!!!
        //  **Its because either the first if statement or the else statement isnt clear enough
        if ( (typeof prevProps.isOpen === 'string') && (this.props.isOpen === false) ) {
            //if it was opened due to the add review button &
            //  if it was only opened on the prior component update
            // debugger
            // if the user logged in or registered when they opened the session modal
            if (this.props.currentUser !== null) {
                
                //for some reason, regardless of whatever the case i set,
                //using a switch case below would cause all three cases to run
                if(prevProps.isOpen === 'productShowReviewModal'){
                    this.setState({
                        showReviewModal: true
                    });
                }
                else if( prevProps.isOpen === 'productShowCartModal'){
                    this.props.updateCartItem({
                        productId: this.props.productId,
                        shopperId: this.props.currentUser.id,
                        quantity: this.state.quantity
                    })
                    .then( data => this.setState({
                        showAddedToCartModal: true
                    }));
                }
                else if (prevProps.isOpen === 'productShowPurchased'){
                    this.props.updateCartItem({
                        productId: this.props.productId,
                        shopperId: this.props.currentUser.id,
                        quantity: this.state.quantity
                    }).then( data => {
                        
                        this.props.history.push('/cart');
                    });
                }                
            };            
        };
    }

    closeAddedToCartModal(e){
        e.stopPropagation();
        e.preventDefault();

        if(['product-cart-added-modal-background', 'product-cart-added-modal-close-button', 'product-cart-added-close-button'].includes(e.target.className)){
            this.setState({
                showAddedToCartModal: false
            });
        }
        
    }

    closePurchasedModal(e){
        
        // e.preventDefault();

        //Please please please do not forget to either: include another class name OR remove
        // the includes function
        if(['product-purchased-modal-background', 'product-purchased-modal-close-button'].includes(e.target.className)){
            this.setState({
                showPurchasedModal: false
            });
        }

    }

    closeReviewModal(e){
        
        /*
            The current issue for error displaying is that the automatic Onclick event listener will always run, even when the function isnt called,
                so i need need need to have a seperate condition for the button itself, maybe have the argument "e" just be "true" or "close"
        */
        if(e === 'successfulSubmission'){
            this.setState({
                showReviewModal: false
            })
        }
        else if( ['review-form-modal-background ', 'review-form-cancel-modal-button'].includes(e.target.className) ) {
            this.setState({
                showReviewModal: false
            })   
        }
    }

    handlePurchase(e){
        e.stopPropagation();
        e.preventDefault();

        if(this.props.currentUser === null){   
            this.props.openModalActionRequired('productShowPurchased');
        }
        else{
            this.props.updateCartItem({
                productId: this.props.productId,
                shopperId: this.props.currentUser.id,
                quantity: this.state.quantity
            }).then( data => {
                this.props.history.push('/cart');
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

    openReviewModal(e){
        e.preventDefault();
        e.stopPropagation();

        if(this.props.currentUser){
            this.setState({
                showReviewModal: true
            });
        }
        else if(this.props.currentUser === null){
            //Open session modal and pass a message from here
            //  to let it know to render title "Sign in to continue" instead     
            this.props.openModalActionRequired('productShowReviewModal');
        };
    }

    handleAddToCart(e){
        e.stopPropagation();
        e.preventDefault();
    
        if(this.props.currentUser === null){
            this.props.openModalActionRequired('productShowCartModal');
        }
        else {
            this.props.updateCartItem({
                productId: this.props.productId,
                shopperId: this.props.currentUser.id,
                quantity: this.state.quantity
            })
            .then( data => this.setState({
                showAddedToCartModal: true
            }));

        };
    }

    redirectToCart(e){
        e.stopPropagation();
        e.preventDefault();

        //this might also need a boolean for checking user logged in 
        //or not
        this.props.history.push('/cart');
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

        
        //If there is no product under the ID in the url
        if(!this.props.product) return (
            <div className='max-body-width body-padding'>
                <div className="product-show-unavailable-container">
                    <FaFaceFrown className='fa-face-frown' />
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

        const productImage = this.props.product.image === '' ? 'https://picsum.photos/900' : this.props.product.image;
        
        https://i.pinimg.com/originals/33/9e/1b/339e1b7693b8132ed5393d34eaddb52b.jpg
        return (
            <div className='product-show-container max-body-width body-padding'>
                <div className='product-image-info-and-reviews-container'>
                    <div className='product-image-and-reviews-container'>
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
                                {/* <img src={"https://i.etsystatic.com/26339184/r/il/672aaf/5609400017/il_794xN.5609400017_tglw.jpg"}>
                                </img> */}
                                <img src={productImage}>
                                </img>
                            </div>
                        </div>

                        <ReviewIndexContainer
                            reviews={Object.values(this.props.reviews)}
                            currentUserReview={this.props.currentUser !== null ? this.props.reviews[this.props.currentUser.id] : undefined}
                            showReviewModal={this.state.showReviewModal}
                            paramsId={this.props.match.params.id}
                            currentUser={this.props.currentUser}
                            users={this.props.users}
                            avgRating={this.props.product.avgRating}
                            openReviewModal={this.openReviewModal}
                        />

                        { (this.props.product.ownerId !== this.props.currentUser?.id ) && ($.isEmptyObject(this.props.reviews[this.props.currentUser?.id])) ? (
                            <div className='review-form-modal-create-toggle-container'>
                                <button className='review-form-modal-create-toggle' onClick={this.openReviewModal}>
                                    add a review
                                </button>
                            </div>
                        ) : (
                            null
                        )}
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
                                        buy it now
                                    </button>
                                    {/* <p className='product-checkout-button-label'>
                                        Buy it now
                                    </p> */}
                                </form>
                            </div>

                            <div className='product-cart-add-button-container'>
                                <form onSubmit={this.handleAddToCart}>
                                    <button className='product-cart-add-button'>
                                        add to cart
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

                                <div className='fa-caret-down-container'>
                                    <FaCaretDown className={`fa-caret-down ${this.state.showDescription ? "expanded" : ""}`}/>                                    
                                </div>
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

                {/* Section for Reviews */}
                    
                    
                    {/* 
                        Now i have to change it so that a user sees their review at the top always (if logged in AND actually has a review)
                            Then i need to "move" the Edit review button under the currentUser's review
                                Lastly, I need to add the delete button next to the edit review *while making sure the currentUser can only delete their own review* 
                    */}

                    {/* <ReviewIndexContainer
                        reviews={Object.values(this.props.reviews)}
                        currentUserReview={this.props.currentUser !== null ? this.props.reviews[this.props.currentUser.id] : undefined}
                        showReviewModal={this.state.showReviewModal}
                        paramsId={this.props.match.params.id}
                        currentUser={this.props.currentUser}
                        users={this.props.users}
                        avgRating={this.props.product.avgRating}
                        openReviewModal={this.openReviewModal}
                    /> */}
                    
                    {/* <ReviewIndex 
                        reviews={Object.values(this.props.reviews)}
                        currentUser={this.props.currentUser}
                        users={this.props.users}
                        avgRating={this.props.product.avgRating}
                    /> */}


 



                    {/* { (this.props.product.ownerId !== this.props.currentUser?.id ) && ($.isEmptyObject(this.props.reviews[this.props.currentUser?.id])) ? (
                        <div className='review-form-modal-create-toggle-container'>
                            <button className='review-form-modal-create-toggle' onClick={this.openReviewModal}>
                                Add a review
                            </button>
                        </div>
                    ) : (
                        null
                    )} */}

                    
                    {/******* Note: The ReviewForm component might need to be renamed to ReviewFormModal ********/}
                    
                    {/* <div className={`review-form-modal-background ${this.state.showReviewModal ? 'review-form-modal-hidden': ''}`}>
                        <div className={`review-form-modal-container ${this.state.showReviewModal ? 'review-form-modal-hidden': ''}`}>
                            <ReviewForm productId={this.props.product.id}/>
                        </div>
                    </div> */}

                    
                    {/* Should it just be like this, passing the showReviewModal condition here so everything has a more proper seperation of concern? */}
                    <ReviewFormContainer
                        product={this.props.product}
                        productImage={productImage}
                        productOwnerName={this.props.users[this.props.product.ownerId].name}
                        review={this.props.currentUser !== null ? this.props.reviews[this.props.currentUser.id] : undefined}
                        showReviewModal={this.state.showReviewModal}
                        closeReviewModal={this.closeReviewModal}
                        paramsId={this.props.match.params.id}
                    />
                    
                    {/* <ReviewFormContainer
                        product={this.props.product}
                        productOwnerName={this.props.users[this.props.product.ownerId].name}
                        review={this.props.currentUser !== null ? this.props.reviews[this.props.currentUser.id] : undefined}
                        showReviewModal={this.state.showReviewModal}
                        closeReviewModal={this.closeReviewModal}
                        paramsId={this.props.match.params.id}
                    /> */}



                {/* 
                <img className="product-modal-image" src={"https://fastly.picsum.photos/id/757/1600/900.jpg?hmac=xB17QkxH_kqjV6K0R7-EZkW2xTq8iukba_wZ6wo5d4Q"}>
                </img>

                *********vvvv height vvvv**************
                <img className="produ877777ct-modal-image" src={"https://i.pinimg.com/originals/33/9e/1b/339e1b7693b8132ed5393d34eaddb52b.jpg"}>
                </img> 
                */}
                {/* <div className='product-cart-added-modal-wrapper open'> */}
                <div className={`product-cart-added-modal-wrapper ${this.state.showAddedToCartModal ? 'open' : 'closed'}`}>
                    <div 
                        className='product-cart-added-modal-background'
                        onClick={this.closeAddedToCartModal}
                    >
                        <div className='product-cart-added-modal-container'>
                            <span className='product-cart-added-close-button'>
                                <FaXmark className='fa-cart-added-modal-close-button' />
                            </span>

                            <div className='product-cart-added-modal-image-and-description-container'>
                                <div className='product-modal-image-container'>
                                    <img className="product-modal-image" src={productImage}>
                                    </img>
                                </div>
                                
                                <p className='product-cart-added-modal-description'>
                                    {this.state.quantity} item(s) added to cart!
                                </p>
                            </div>

                            <div className='product-cart-added-modal-redirect-to-cart-button-container'>
                                {/* Remember to update the form above to include and
                                        onSubmit, preventDefault & stopPropagation in the function,
                                        and also add the className of the button below to the close
                                        modal function */
                                }
                                <button className='product-cart-added-modal-redirect-to-cart-button'
                                    onClick={this.redirectToCart}    
                                >
                                    view cart & check out
                                </button>
                            </div>

                            <div className='product-cart-added-modal-close-button-container'>
                                <button className='product-cart-added-modal-close-button'>
                                    keep shopping <FaArrowRightLong className='fa-arrow-right-long'/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`product-purchased-modal-wrapper ${this.state.showPurchasedModal ? 'open' : 'closed'}`}>
                {/* <div className={'product-purchased-modal-wrapper open'}> */}
                    <div 
                        className='product-purchased-modal-background'
                        onClick={this.closePurchasedModal}
                    >
                        <div className='product-purchased-modal-container'>
                            <span className='product-purchased-modal-close-button'>
                                <FaXmark className='fa-product-purchased-modal-close-button' />
                            </span>

                            {/* Should find an image to put inside/beside the thank you msg */}
                            <p className='product-purchased-modal-message-one'>
                                Thank you for looking at my website!
                            </p>
                            <p className='product-purchased-modal-message-two'>
                                If would like to look at my portfolio click the some of the buttons below. Or if you
                                would like to continue looking around Cutesy, please feel free to do so!
                            </p>

                            {/* <div className='portfolio-link'>
                                <a href="javascript:;">portfolio (this will be an image prob!)</a>
                                <p>
                                    portfolio website!
                                </p>
                            </div>
                             */}
                            <div className='social-links'>
                                <a href="https://www.github.com" target="_blank">
                                    <FaGithub className='fa-brand fa-github' />
                                </a>
                                <a href="https://www.linkedin.com" target="_blank">
                                    <FaLinkedin className='fa-brand fa-linkedin' />
                                </a>
                                <a href="https://www.angellist.com" target="_blank">
                                    <FaAngellist className='fa-brand fa-angellist' />
                                </a>
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
