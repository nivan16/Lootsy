import React from "react";
import StarRatings from 'react-star-ratings';

class ReviewForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            product_id: this.props.match.params.id,
            reviewer_id: this.props.userId,
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

    }

    render(){
        <div className="review-form-container">
            <form className="review-form" onSubmit={this.handleSubmit}>
                <h1 className="review-form-header">
                    Write a review
                </h1>
                
                <div className="review-form-rating-display">
                    <h2>Rating:</h2>
                    <StarRatings 
                        rating={this.state.rating}
                        changeRating={this.handleRatingChange}
                        numberOfStars={5}
                        name="rating"
                        starDimension="20px"
                        starSpacing="1px"
                    />

                </div>

            </form>
        </div>

    }


}

export default ReviewForm