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
    }




}

export default ReviewForm