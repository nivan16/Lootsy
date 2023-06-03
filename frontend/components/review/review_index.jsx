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
        this.nextPage = this.nextPage.bind(this);
        this.paginateReviews = this.paginateReviews.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.toSpecificPage = this.toSpecificPage.bind(this);
        
    }

    averageOfRatings(){
        /* If a hashmap is created here, and used as a return value, is that okay? */
        const sum = this.props.reviews.reduce((acc, review) => {
            return acc + review.rating;
        }, 0);


        return sum / this.props.reviews.length;
    }

    toSpecificPage(e){
        e.preventDefault();

        const newPage = parseInt(e.target.textContent);
        this.setState({
            currentPage: newPage
        });
    }

    previousPage(e){
        e.preventDefault();
        this.setState({
            currentPage: this.state.currentPage - 1
        });
    }

    nextPage(e){
        e.preventDefault();

        this.setState({
            currentPage: this.state.currentPage + 1
        });
    }

    paginateReviews(){
        //there is at least 2 pages on method invocation
        const pageCount = Math.ceil(this.props.reviews.length / 4);
        if(pageCount > 3){
            //*if the currentPage is on one of the first two numbers*
            //first number, second number, "...", last number

            //*if the currentPage is on one of the two last numbers*
            //first number, "...", second last number, last number

            
            //*last case, if the currentPage is not either of the other cases*
            //first number, "...", currentPage number, "...", last number
            if(currentPage){}
            else {
                return (
                    <>
                        <div className='review-page-navigation-button-container'>
                            <button className='review-page-navigation-button' onClick={this.toSpecificPage}>
                                <span className='review-page-navigation-number'>
                                    1
                                </span>
                            </button>
                        </div>

                        <p className='review-page-navigation-ellipsis'>
                            &hellip;
                        </p>

                        <div className='review-page-navigation-button-container current-review-page'>
                            <button className='review-page-navigation-button' onClick={this.toSpecificPage}>
                                <span className='review-page-navigation-number'>
                                    {currentPage}
                                </span>
                            </button>
                        </div>

                        <p className='review-page-navigation-ellipsis'>
                            &hellip;
                        </p>

                        <div className='review-page-navigation-button-container'>
                            <button className='review-page-navigation-button' onClick={this.toSpecificPage}>
                                <span className='review-page-navigation-number'>
                                    {pageCount}
                                </span>
                            </button>
                        </div>
                    </>
                );
            }
        }
        else {
            //In the case there is 12 or less reviews, just return 2 or 3 buttons
            const pagination = Array.from({length: pageCount}, (_, i) => (
                <div className={`review-page-navigation-button-container ${i === this.state.currentPage ? 'currentPage' : ''}`}>
                    <button className='review-page-navigation-button' onClick={this.toSpecificPage}>
                        <span className='review-page-navigation-number'>
                            {i + 1}
                        </span>
                    </button>
                </div>
            ))

            return (
                <>
                    {pagination}
                </>

                
            )
        }
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
                {this.props.reviews.length > 4 && <div className='reviews-index-pagination-container'>
                    <div className='review-previous-page-navigation-button-container'>
                        <button className={`review-previous-page-navigation-button ${this.state.currentPage === 1 ? 'blocked' : ''}`} onClick={this.previousPage}>
                            <span className='review-page-navigation-arrow'>
                                &larr;
                            </span>
                        </button>
                    </div>

                    {this.paginateReviews()}

                    <div className='review-next-page-navigation-button-container'>
                        <button className={`review-next-page-navigation-button ${this.state.currentPage === (this.props.reviews.length-1) ? 'blocked' : ''}`} onClick={this.nextPage}>
                            <span className='review-page-navigation-arrow'>
                                &rarr;
                            </span>
                        </button>
                    </div>
                </div>
                }
            </>

        );
    }
}

export default ReviewIndex;