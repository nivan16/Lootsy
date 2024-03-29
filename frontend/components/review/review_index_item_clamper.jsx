import React from "react";
import StarRatings from "react-star-ratings";

import { FaEllipsis } from "react-icons/fa6";


class ReviewIndexItemClamper extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isClamped: false,
            isExpanded: false
        }

        this.contentRef = React.createRef();

        this.checkLineClamp = this.checkLineClamp.bind(this);
        this.deleteUserReview = this.deleteUserReview.bind(this);
        this.toggleClamp = this.toggleClamp.bind(this);
    }

    componentDidMount(){
        this.checkLineClamp();
        window.addEventListener('resize', this.checkLineClamp);
    }

    componentDidUpdate(prevProps){
        if(this.props.currentUserReview?.id === this.props.reviewId){
            if(prevProps?.currentUserReview?.review !== this.props.currentUserReview.review){
                const content = this.contentRef.current;
                
                if(content && content.scrollHeight > content.clientHeight){
                    this.setState({
                        isClamped: true,
                        isExpanded: false
                    });
                }
                else{
                    this.setState({
                        isClamped: false,
                        isExpanded: false
                    });
                }
            }
        }
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
                isClamped: false,
            });
        }
    }

    deleteUserReview(e){
        e.preventDefault()
        this.props.deleteReview({
            id: this.props.reviewId,
            reviewerId: this.props.reviewerId
        })
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
                        starRatedColor='rgb(139, 193, 124)'
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
                                <FaEllipsis className='fa-ellipsis' style={{color: "#000000",}}/>
                            </button>
                        )}
                    </div>
                )}

                <div className='review-item-reviewer'>
                    {this.props.username}
                </div>
               
                

                { ( (this.props.currentUserReview !== undefined) && (this.props.currentUserReview.reviewerId === this.props.reviewerId)) ? (
                    <div className='review-edit-and-delete-container'>
                        <div className='review-form-modal-edit-toggle-container'>
                            <button className='review-form-modal-edit-toggle' onClick={this.props.openReviewModal}>
                                edit your review
                            </button>
                        </div>

                        <div className='review-delete-button-container'>
                            <button className='review-delete-button' onClick={this.deleteUserReview}>
                                delete your review
                            </button>
                        </div>
                    </div>
                    ) : (
                        null
                    )
                }
            </>
        );
    }
};

export default ReviewIndexItemClamper;