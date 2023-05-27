import React from 'react';

/*
    What properties (props) will this need?
    .    Reviews (as an array)
    .    Current User(if logged in, to create a new one)
    .

    componentDidMount is unnecessary here, since it is relying on receiving
    the props directly from the parent component.
*/

class ReviewIndex extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentPage: 1
        };

        this.averageOfRatings = this.averageOfRatings.bind(this);
    }

    averageOfRatings(){
        /* If a hashmap is created here, and used as a return value, is that okay? */
        const sum = this.props.reviews.reduce((acc, review) => {
            return acc + review.rating;
        }, 0);


        return sum / this.props.reviews.length;
    }

    



    render(){
        if(this.props.reviews.length === 0){
            //This is going to return the react-review-stars package as well
            return (
                <h2 className='reviews-index-header'>
                    0 Product reviews *****
                </h2>
            );
        };

        const averageRating = this.averageOfRatings();

        const itemsPerPage = 4;
        //Ex for below: (1-1) * 4 is index 0,
        //(2-1) * 4 is index 4, meaning that its dynamic!
        const startIndex = (this.state.currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
    
        // Ex: Array.slice(0, 4)
        const reviewsToDisplay = this.props.reviews.slice(startIndex, endIndex);
        
        // Unsure if this is needed yet, to display the last page of reviews
        // const totalPages = Math.ceil(this.props.reviews.length / itemsPerPage);
        return (
            <>
                <h2 className='reviews-index-header'>
                    {this.props.reviews.length} Product Reviews ::: {averageRating}
                </h2>

                <div className='reviews-index-container'>
                    {
                        reviewsToDisplay.map(review => (
                                <div className='review-item' key={review.id}>
                                    <div className='review-item-rating'>
                                        {review.rating}
                                    </div>

                                    {review.review !== null && (
                                        <div className='review-item-text'>
                                            {review.review}
                                        </div>
                                    )}
                                    
                                    <div className='review-item-reviewer'>
                                        {this.props.users[review.reviewerId].name}
                                    </div>
                                </div>
                            )
                        )
                    }
                </div>
                <div className='reviews-index-pagination'>
                    

                </div>
            </>

        );
    }
}

export default ReviewIndex;