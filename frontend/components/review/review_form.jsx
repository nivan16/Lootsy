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
        };
        //created the variable because the reviewer wouldnt update in the state but it would in the props
        this.props.closeReviewModal(e);
        (this.props.review === undefined) ? this.props.createReview(newState) : this.props.editReview(newState);
        this.setState({
            rating: 0,
            review: ""
        });
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
            <div className={`review-form-modal-background ${this.props.showReviewModal ? '': 'review-form-modal-hidden'}`}>
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
                                    <div className="review-form-cancel-modal-button">
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