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
                <h2>
                    0 Product reviews *****
                </h2>
            );
        };

        const averageRating = this.averageOfRatings();

        return (
            <h2>
                {this.props.reviews.length} Product Reviews ::: {averageRating}
            </h2>

        );
    }
}

export default ReviewIndex;