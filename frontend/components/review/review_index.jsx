import React from 'react';
import StarRatings from 'react-star-ratings';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCheck } from '@fortawesome/free-solid-svg-icons';

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
        //Note: suggested will just return reviews with words in them first
        this.state = {
            currentPage: 1,
            showSortingOptions: false,
            showSortMenu: false,
            sortReviewsBy: 'suggested'
        };

        this.averageOfRatings = this.averageOfRatings.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.paginateReviews = this.paginateReviews.bind(this);
        this.reviewSort = this.reviewSort.bind(this);
        this.switchReviewSortCategory = this.switchReviewSortCategory.bind(this);
        this.toggleSortMenu = this.toggleSortMenu.bind(this);
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
    
    nextPage(e){
        e.preventDefault();
  
        if (this.state.currentPage < Math.ceil(this.props.reviews.length / 4)) {
            this.setState({
                currentPage: this.state.currentPage + 1
            });            
        };
    }

    previousPage(e){
        e.preventDefault();

        if (this.state.currentPage > 1) {
            this.setState({
                currentPage: this.state.currentPage - 1
            });
        };
    }


    paginateReviews(){
        //There is at least 2 pages on method invocation
        const pageCount = Math.ceil(this.props.reviews.length / 4);

        //If there are more than 3 pages of reviews then elipses will be needed, otherwise it will just be numbered buttons
        if(pageCount > 3){            
            if(this.state.currentPage <= 2){
                //*if the currentPage is on one of the first two numbers*
                // Ex: first number, second number, "...", last number
                return (
                    <>
                        <div className='review-page-navigation-button-container'>
                            <button className={`review-page-navigation-button  ${this.state.currentPage === 1 ? 'current-review-page' : ''}`} onClick={this.toSpecificPage}>
                                <span className='review-page-navigation-number'>
                                    1
                                </span>
                            </button>
                        </div>

                        <div className='review-page-navigation-button-container'>
                            <button className={`review-page-navigation-button  ${this.state.currentPage === 2 ? 'current-review-page' : ''}`} onClick={this.toSpecificPage}>
                                <span className='review-page-navigation-number'>
                                    2
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
            else if(this.state.currentPage > pageCount-2){
                //*if the currentPage is on one of the two last numbers*
                // Ex: first number, "...", second last number, last number
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

                        <div className='review-page-navigation-button-container'>
                            <button className={`review-page-navigation-button ${this.state.currentPage === pageCount-1 ? 'current-review-page' : ''}`} onClick={this.toSpecificPage}>
                                <span className='review-page-navigation-number'>
                                    {pageCount-1}
                                </span>
                            </button>
                        </div>

                        <div className='review-page-navigation-button-container'>
                            <button className={`review-page-navigation-button ${this.state.currentPage === pageCount ? 'current-review-page' : ''}`} onClick={this.toSpecificPage}>
                                <span className='review-page-navigation-number'>
                                    {pageCount}
                                </span>
                            </button>
                        </div>
                    </>
                );
            }
            else {
                //*last case, if the currentPage is not either of the other cases*
                // Ex: first number, "...", currentPage number, "...", last number
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
                            <button className='review-page-navigation-button current-review-page' onClick={this.toSpecificPage}>
                                <span className='review-page-navigation-number'>
                                    {this.state.currentPage}
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

            return pagination;
        }
    }

    reviewSort(){
        let sortedReviews = [...this.props.reviews];
        //Suggested will return reviews with words first
        if(this.state.sortReviewsBy === 'suggested'){
            sortedReviews.sort((a, b) => {
                if(a.review === null && b.review === null)
                    return 0;
                else if(a.review === null && b.review !== null)
                    return 1;
                else
                    return -1;
            });
        }
        else{ //Sort reviews by highest rated
            sortedReviews.sort((a, b) => {
                return b.rating - a.rating;
            });
        }

        return sortedReviews;
    }

    switchReviewSortCategory(e){
        e.stopPropagation();
        this.setState( prevState => {
            return prevState.sortReviewsBy === 'suggested' ? { 
                sortReviewsBy: 'ratings',
                showSortMenu: false
            } : {
                sortReviewsBy: 'suggested',
                showSortMenu: false
            };
        });
    }

    toggleSortMenu(e){
        e.stopPropagation()
        this.setState( prevState => {
            return prevState.showSortMenu ? { 
                showSortMenu: false
            } : {
                showSortMenu: true
            };
        });
    }




    render(){
        if(this.props.reviews.length === 0){
            //This is going to return the react-review-stars package as well
            return (
                <div className='reviews-index-header-container'>
                    <h2 className='reviews-index-header'>
                        0 Product reviews | 
                    </h2>

                    <div className='reviews-index-header-stars-container'>
                        <StarRatings 
                            rating={0}
                            starEmptyColor='lightgray'
                            className='aggregate-review-rating'
                            starDimension='25px'
                            starSpacing='1px'
                        />
                    </div>
                </div>
            );
        };

        // const averageRating = this.averageOfRatings();

        //What is this, reviewsClone, for??
        let reviewsClone = this.reviewSort();

        const itemsPerPage = 4;
        //Ex for below: (1-1) * 4 is index 0,
        //(2-1) * 4 is index 4, meaning that its dynamic!
        const startIndex = (this.state.currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
    
        // Ex: Array.slice(0, 4)
        const reviewsToDisplay = reviewsClone.slice(startIndex, endIndex);
        
        // Unsure if this is needed yet, to display the last page of reviews
        const totalPages = Math.ceil(this.props.reviews.length / itemsPerPage);
        return (
            <>
                <div className='reviews-index-header-container'>
                    <h2 className='reviews-index-header'>
                        {this.props.reviews.length} Product Reviews |
                    </h2>
                    
                    <div className='reviews-index-header-stars-container'>
                        <StarRatings 
                            rating={this.props.avgRating}
                            starEmptyColor='lightgray'
                            starRatedColor='black'
                            starDimension='20px'
                            starSpacing='1px'                            
                        />
                    </div>
                    {/* For the below to work as well as other areas, maybe i should make a copy ([...this.props.reviews])
                     of the reviews right before all the major code in the return function, that way the algorithms still work as
                     long as i pass the Array const copy to the methods. Might need to have the class functions return functions, 
                     will investigate. */}

                    { totalPages > 1 && <div className='reviews-sorting-buttons-container'>
                            {/* This dropdown will be buttons because of the more excessive styling required */}
                            <button
                                className={`reviews-sorting-button ${this.state.showSortMenu ? 'expanded' : 'hidden'}`}
                                onClick={this.toggleSortMenu}
                            >
                                {
                                    this.state.sortReviewsBy === 'suggested' ? 'Sort by: Suggested' : 'Sort by: Highest rated'
                                }

                                <FontAwesomeIcon icon={faCaretDown} className='review-sort-caret-down' />
                            </button>

                            <div className={`reviews-sort-menu ${this.state.showSortMenu ? 'expanded': ''}`}>
                                <button
                                    className={`reviews-sorting-option ${this.state.sortReviewsBy === 'suggested' ? 'selected' : ''}`}
                                    onClick={this.switchReviewSortCategory}
                                >
                                    Suggested
                                    
                                    <div className='reviews-option-check-symbol'>
                                        <FontAwesomeIcon icon={faCheck} style={{color: "#000000",}} /> 
                                    </div>
                                </button>

                                <button
                                    className={`reviews-sorting-option ${this.state.sortReviewsBy === 'suggested' ? '' : 'selected'}`}
                                    onClick={this.switchReviewSortCategory}
                                >
                                    Highested rated

                                    <div className='reviews-option-check-symbol'>
                                        <FontAwesomeIcon icon={faCheck} style={{color: "#000000",}} /> 
                                    </div>
                                </button>
                            </div>
                        </div>
                    }
                </div>

                <div className='reviews-index-container'>
                    {
                        reviewsToDisplay.map(review => (
                                <div className='review-item' key={review.id}>
                                    <IndividualReview 
                                        review={review.review} 
                                        rating={review.rating}
                                        username={this.props.users[review.reviewerId].name}
                                    />

                                    {/* <div className='review-item-rating'>
                                        <StarRatings 
                                            rating={review.rating}
                                            starEmptyColor='lightgray'
                                            starRatedColor='black'
                                            starDimension='20px'
                                            starSpacing='1px'                            
                                        />
                                    </div>

                                    {review.review !== null && (
                                        <p className='review-item-text'>
                                            {review.review}
                                        </p>
                                    )}
                                    
                                    <div className='review-item-reviewer'>
                                        {this.props.users[review.reviewerId].name}
                                    </div> */}
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
                        <button className={`review-next-page-navigation-button ${this.state.currentPage === totalPages ? 'blocked' : ''}`} onClick={this.nextPage}>
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

class IndividualReview extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isClamped: false,
            isExpanded: false
        }

        this.contentRef = React.createRef();

        this.checkLineClamp = this.checkLineClamp.bind(this);
        this.toggleClamp = this.toggleClamp.bind(this);
    }

    componentDidMount(){
        this.checkLineClamp();
        window.addEventListener('resize', this.checkLineClamp);
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.checkLineClamp);
    }

    checkLineClamp(){
        const content = this.contentRef.current;
        if(content && content.scrollHeight > content.clientHeight){
            this.setState({
                isClamped: true
            });
        }
        else{
            this.setState({
                isClamped: false
            });
        }
    }

    toggleClamp(){
        this.setState((prevState) => {
            if(prevState.isClamped){
                return {
                    isClamped: false,
                    isExpanded: true
                }
            }
            else{
                return {
                    isClamped: true,
                    isExpanded: false
                }
            }
        })
    }

    render(){
        // if(this.props.username === 'star'){
        //     debugger
        // }

        return (
            <>
                <div className='review-item-rating'>
                    <StarRatings 
                        rating={this.props.rating}
                        starEmptyColor='lightgray'
                        starRatedColor='black'
                        starDimension='20px'
                        starSpacing='1px'                            
                    />
                </div>

                {this.props.review !== null && (
                    <div className='review-item-text-container'>
                        <p ref={this.contentRef} className={`review-item-text ${this.state.isExpanded ? 'item-text-expanded' : ''}`}>
                            {this.props.review}
                        </p>
                        
                        {(this.state.isClamped || this.state.isExpanded) && (
                            <button 
                                className='review-item-text-clamp-toggle'
                                onClick={this.toggleClamp}
                            >
                                &hellip;
                            </button>
                        )}
                    </div>
                )}
                
                <div className='review-item-reviewer'>
                    {this.props.username}
                </div>
            </>
        );
    }


}

export default ReviewIndex;