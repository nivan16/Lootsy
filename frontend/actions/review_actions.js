import * as ReviewUtils from "../utils/review_utils";

const receiveReview = review => ({
    type: 'RECEIVE_REVIEW',
    review
})

export const createReview = review => (
    ReviewUtils.createReview(review)
        .then (
            review => dispatch(receiveReview(review)),
            err => dispatch(recieveReviewErrors(err.responseJSON))
        )
);