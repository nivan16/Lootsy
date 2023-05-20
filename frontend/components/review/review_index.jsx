import React from 'react';

/*
    What properties (props) will this need?
    .    Reviews
    .    Current User(if logged in, to create a new one)
    .

    componentDidMount is unnecessary here, since it is relying on receiving
    the props directly from the parent component.
*/

class ReviewIndex extends React.Component{
    constructor(props){
        super(props);

        this.averageRating = this.averageRating.bind(this);
    }

    averageRating(){
        const sum = Object.values(this.props.reviews).reduce((acc, review) => {
            return acc + review.rating;
        }, 0);


        return sum / Object.values(this.props.reviews).length;
    }

    render(){
        if($.isEmptyObject(this.props.reviews)){
            //This is going to return the react-review-stars package as well
            return (
                <h2>
                    0 Product reviews *****
                </h2>
            );
        }

    }
}

export default ReviewIndex;