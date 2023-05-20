import React from 'react';

/*
    What properties (props) will this need?
    .    Reviews
    .    Current User(if logged in, to create a new one)
    .
*/

class ReviewIndex extends React.Component{
    constructor(props){
        super(props);

        this.averageRating = this.averageRating.bind(this);
    }

    averageRating(){

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