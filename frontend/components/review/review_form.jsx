import { connect } from "react-redux";
import { createReview } from "../../actions/review_actions";
import React from "react";
import StarRatings from 'react-star-ratings';

class ReviewForm extends React.Component{
    constructor(props){
        super(props);

        debugger
        this.state = {
            product_id: this.props.productId,
            reviewer_id: this.props.reviewerId,
            rating: 0,
            review: "",
        }

        this.handleRatingChange = this.handleRatingChange.bind(this);
        this.handleReviewChange = this.handleReviewChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        this.props.createReview(this.state);

        this.setState({
            rating: 0,
            review: ""
        });
    }

    render(){
        <div className="review-form-container">
            <form className="review-form" onSubmit={this.handleSubmit}>
                <h1 className="review-form-header">
                    Write a review
                </h1>
                
                <div className="review-form-rating-display">
                    <h2 className="review-form-rating-title">
                        Rating:
                    
                    </h2>
                    <StarRatings 
                        rating={this.state.rating}
                        changeRating={this.handleRatingChange}
                        numberOfStars={5}
                        
                        starEmptyColor='lightgray'
                        starRatedColor='black'
                        starHoverColor='black'
                        starDimension='20px'
                        starSpacing='1px'
                    />

                    <p className="review-form-rating-label">
                        {this.state.rating} Star(s)
                    </p>
                </div>

                <div className="review-form-review-display">
                    <p className="review-form-review-title">
                        Review:
                    </p>

                    <textarea className="review-form-textarea" value={this.state.review} onChange={this.handleReviewChange}
                        id="review-form-textarea-body" cols="50" rows="10"                        >
                    </textarea>

                    <button className="review-form-submit-button">
                        Submit
                    </button>
                </div>

            </form>
        </div>

    }


}

const mapStateToProps = state => ({
    reviewerId: state.session.currentUser.id,
});

const mapDispatchToProps = dispatch => ({
    createReview: review => dispatch(createReview(review)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);