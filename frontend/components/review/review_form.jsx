import { connect } from "react-redux";
import { createReview, editReview, deleteReview } from "../../actions/review_actions";
import React from "react";
import StarRatings from 'react-star-ratings';

class ReviewForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            product_id: this.props.product.id,
            rating: 0,
            review: "",
        }

        this.handleRatingChange = this.handleRatingChange.bind(this);
        this.handleReviewChange = this.handleReviewChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        if(this.props.review !== undefined){
            if(this.props.review.review !== null){
                this.setState({
                    rating: this.props.review.rating,
                    review: this.props.review.review
                });
            }
            else{
                this.setState({
                    rating: this.props.review.rating
                });
            };
        };
    }

    componentDidUpdate(prevProps, prevState){
        if( (prevProps.product.id !== this.props.product.id) ){
            if(this.props.review !== undefined){
                if(this.props.review.review !== null){
                    //i think i really need to change the empty review from null to '', its messing up alot
                    //  unless i can figure out a way to either: use trim() and then set to null and then figure
                    //  out a way to send nulls to the back end
                    //  *** Or ***
                    //  Have an instance variable method strip() the review (or maybe just handle in front end since JS is faster)
                    //      and if the review.review.length === 0 then set it to *nil* (null in Ruby) and then have it save/update to postgresql
                    //      Also, even though the enter key generates a new line by html representing it as "\n", .trim() (in the front-end)
                    //          removes any number of them (1 - 20) so I will probably do a if(newState.review.trim().length === 0){ then set to '' }
                    //          or mayber even just trim it regardless and then have Ruby set it to nil if the length is equal to 0 (the review is just "") 

                    //  **Note: it is very possible to create/edit a review to have (review: nil) in the rails console, where validation isnt prevent
                    //      by "Minimum 1 required!" error

                    //Also there was a weird bug where the old review persisted to a new user when: edit( or create i forgot), log out, register(i think)
                    //  then "Add a review". could be because of sending empty string with 95 whitespace to backend, then front end received it oddly
                    this.setState({
                        rating: this.props.review.rating,
                        review: this.props.review.review
                    });
                }
                else{
                    this.setState({
                        rating: this.props.review.rating
                    });
                };
            }
            else{
                this.setState({
                    rating: 0,
                    review: "",
                });
            }
        }
    }

    handleRatingChange(newRating){
        this.setState({
            rating: newRating
        })
    }

    handleReviewChange(e){
        e.stopPropagation();
        this.setState({
            review: e.target.value    
        })
    }

    handleSubmit(e){
        e.preventDefault();
        let newState = Object.assign({}, this.state, { reviewer_id: this.props.reviewer.id })

        if(this.props.review !== undefined){
            newState.id = this.props.review.id
            if (this.props.review.review !== null && this.state.review.length === 0) {
                newState.review = null;
            }
        };

       
        //created the variable because the reviewer wouldnt update in the state but it would in the props
        this.props.closeReviewModal(e);
        if(this.props.review === undefined){
            this.props.createReview(newState);
            this.setState({
                rating: 0,
                review: ""
            });
        }
        else{
            this.props.editReview(newState);
        }
    }

    render(){
        // if($.isEmptyObject(this.props.reviewer)){
        //     return (
        //         <div className="review-form-modal-background">
        //             <div className="review-form-error-container">
        //                 <div className="review-form-error-">
        //                     <h1>Please sign in or create an account to leave a review</h1>
        //                 </div>
        //             </div>
        //         </div>
        //     )
        // }

        // <div className={`review-form-modal-background ${this.props.showReviewModal ? '': 'review-form-modal-hidden'}`}>
        // <div className={`review-form-modal-container ${this.props.showReviewModal ? '': 'review-form-modal-hidden'}`}>

        return (
            <div className={`review-form-modal-background ${this.props.showReviewModal ? '': 'review-form-modal-hidden'}`}
                onClick={this.props.closeReviewModal}   
            >
                <div className={`review-form-modal-container ${this.props.showReviewModal ? '': 'review-form-modal-hidden'}`}>
                    <div className="review-form-container">
                        <form className="review-form" onSubmit={this.handleSubmit}>
                            <h1 className="review-form-header">
                                Leave a Review
                            </h1>

                            <div className="review-form-product-info-container">
                                <div className="review-form-product-image-container">
                                    <img src="https://i.etsystatic.com/26339184/r/il/672aaf/5609400017/il_794xN.5609400017_tglw.jpg" alt="thecutekirbster" />
                                </div>

                                <div className="review-form-product-name-and-owner-container">
                                    <div className="review-form-product-owner-container">
                                        {/* Will need image of profile pic here in the future! */}
                                        <p className="review-form-product-owner">
                                            {this.props.productOwnerName}
                                        </p>
                                    </div>

                                    <div className="review-form-product-name-container">
                                        <p className="review-form-product-name">
                                            {this.props.product.name}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="review-form-rating-display">
                                <h2 className="review-form-rating-title">
                                    My Review
                                </h2>                               

                                <StarRatings 
                                    rating={this.state.rating}
                                    changeRating={this.handleRatingChange}
                                    numberOfStars={5}
                                    
                                    starEmptyColor='lightgray'
                                    starRatedColor='black'
                                    starHoverColor='black'
                                    starDimension='32px'
                                    starSpacing='3px'
                                />
                                {/*
                                    {(this.state.rating === 1) ? (
                                            <p className="review-form-rating-label">
                                                {this.state.rating} Star
                                            </p>
                                        ) : (
                                            <p className="review-form-rating-label">
                                                {this.state.rating} Stars
                                            </p>
                                        )
                                    }

                                */}
                            </div>

                            <div className="review-form-review-display">
                                <h3 className="review-form-review-explanation">
                                    Help others by sharing your feedback
                                </h3>

                                <p className="review-form-review-examples">
                                    What do you like about this? Did it arrive on time? Describe your experience
                                    with this item.
                                </p>

                                <textarea 
                                    className="review-form-textarea" 
                                    value={this.state.review} 
                                    onChange={this.handleReviewChange}
                                    placeholder="Share a word if you'd like"
                                >
                                </textarea>

                                <div className="review-form-reviewer-information-container">
                                    <p className="review-form-reviewer-information">
                                        {`Reviewed by ${this.props.reviewer ? this.props.reviewer.name : ""}.`}
                                    </p>

                                    <p className="review-form-privacy-statement">
                                        Your review and profile information will be publicly displayed.
                                    </p>
                                </div>
                                
                                <div className="review-form-buttons-container">
                                    <div className="review-form-cancel-modal-button" onClick={this.props.closeReviewModal}>
                                        Cancel
                                    </div>

                                    <button className="review-form-submit-button" >
                                        Post Your Review
                                    </button>

                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        )
    }


}

const mapStateToProps = state => ({
    reviewer: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
    createReview: review => dispatch(createReview(review)),
    editReview: review => dispatch(editReview(review)),
    deleteReview: review => dispatch(deleteReview(review))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);